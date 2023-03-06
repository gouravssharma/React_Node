import mongoose from "mongoose"

const  Connection  =async (username,password) =>{
 try{
const URL =`mongodb://${username}:${password}@ac-1hazxu9-shard-00-00.k0plq3x.mongodb.net:27017,ac-1hazxu9-shard-00-01.k0plq3x.mongodb.net:27017,ac-1hazxu9-shard-00-02.k0plq3x.mongodb.net:27017/?ssl=true&replicaSet=atlas-ftiqd3-shard-0&authSource=admin&retryWrites=true&w=majority`;
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser :true});
console.log("database connected successfuly");
 }
 catch(ex)
 {
    console.log("Error while connecting",ex);
 }

}

export default Connection;