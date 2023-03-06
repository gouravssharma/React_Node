import express from 'express';

import  {addUser,getAllUserList,deleteUser}  from '../controller/userController.js';
const router  = express.Router();

router.post("/add",addUser);

router.get("/getAllUsers",getAllUserList)

router.delete("/deleteUser/:id",deleteUser);
export default router;