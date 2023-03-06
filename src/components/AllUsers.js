import { all } from "axios";
import React,{useState,useEffect} from "react";
import { getAllUsers,deleteUser } from "../service/api";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// function createData(
//     name,
//     username,
//     email,
//     phone
    
//   ) {
//     return { name, username, email, phone };
//   }

const AllUsers  =(props) =>{
const [userList,setUserList] = useState([]);

const userListFromDB =() =>{

    getAllUsers().then(res=>{
        var userListData = res.data;
        // var newData =[];
        // userListData.forEach(element => {
        //     newData.push(createData(element.name, element.username,element.email,element.phone));
           
        // });
       
        setUserList([...userListData]);
    });
}

   useEffect(()=>{
    userListFromDB();

   },[])
    
   const DeleteUser =(value) =>{
deleteUser(value).then(res=>{
    if(res.data == "success")
    {
        userListFromDB();
    }

}).catch(ex=>{

})
   }
    return(
       
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <TableRow
              key={row.name}
               
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <input type="button" value='Delete'onClick={()=>DeleteUser(row._id)}></input>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    )
          }
export default AllUsers;