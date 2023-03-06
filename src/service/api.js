
import axios from 'axios';

const URL ='http://localhost:8001';

export const addUser =(data) =>{
    try{
  return axios.post(`${URL}/add`,data)
    }catch(ex)
    {
        console.log(ex);
    }
}

export const getAllUsers =() =>{
  try{
return axios.get(`${URL}/getAllUsers`);

  }
  catch(ex){
    console.log(ex);
  }
  
}

export const deleteUser =(data) =>{
  try{
    var url = URL + "/deleteUser/"+ data;
return axios.delete(url);
  }
  catch(ex){

  }
}