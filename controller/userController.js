import User from "../schema/userModal.js"

export const  addUser = async (request,response)=>{
    const user  = request.body;
    const newUser = new User(user);
  try{
   await newUser.save();
   response.status(201).json(newUser);
  }
catch(err)
{
    response.status(409).json({message :err.message});
}
}

export const getAllUserList = async (request,response) =>{

  try{
 await User.find({}).then(users=>{
  response.status(201).json(users);
  // response.send(users);
 }).catch(err => {
  console.log(err);
 })
  }
  catch(err)
  {
    console.log(err);
  }
}

export const deleteUser = async (request,response) =>{
try{
  const userId = request.params.id;
await User.deleteOne({_id:userId});
response.send("success")
}
catch(err)
{
  response.status(409).json({message :err.message});
}
}