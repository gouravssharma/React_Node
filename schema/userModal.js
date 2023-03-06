import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userModal = mongoose.Schema({
    name :String,
    username:String,
    email:String,
    phone:String
})

autoIncrement.initialize(mongoose.connection);
userModal.plugin(autoIncrement.plugin,'user');

const user= mongoose.model('user',userModal);

export default user;