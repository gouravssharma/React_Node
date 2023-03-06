
import { FormControl, FormGroup, Input, InputLabel,styled,Button } from "@mui/material";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { addUser } from "../service/api";

const Container  = styled(FormGroup)`
width : 50%;
margin:5px auto 0 auto;
& > div{
    margin-top:30px;
}
`

 const AddUser = (props) =>{

   
    const[user,setUser] = useState({});
    const navigate  = useNavigate();


    const CreateUser =() =>{      
     addUser(user).then(res =>{
        navigate("/allusers");
     }).catch(ex=>{
alert(ex);
     });
     

    }

const onvalueChange =(e)=>{
    let name  = e.target.name;
    let value  = e.target.value;
//   var obj = JSON.parse(JSON.stringify(user));  // to make a deep copy of the obj.
   setUser({...user,[name]:value})  // to make a clone of the obj.
    // setUser({...obj,[name]:value})

}
    return (
        <Container>   
    <FormControl>
<InputLabel>Name</InputLabel>
<Input onChange={(e)=>onvalueChange(e)} name ="name" />
    </FormControl>

    <FormControl>
<InputLabel>UserName</InputLabel>

<Input onChange={(e)=>onvalueChange(e)} name ="username"/>

    </FormControl>
    <FormControl>
<InputLabel>Email</InputLabel>
<Input onChange={(e)=>onvalueChange(e)} name ="email"/>
    </FormControl>
    <FormControl>
<InputLabel>Phone</InputLabel>
<Input onChange={(e)=>onvalueChange(e)} name ="phone"/>
    </FormControl>

    <FormControl>
    <Button variant="contained" onClick={()=>CreateUser()}>Add User</Button>
    </FormControl>
    </Container>    
    
    )
}

export default AddUser;