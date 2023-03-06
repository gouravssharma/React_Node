import express from 'express';
import Connection from './database/db.js';
import dotenv from  'dotenv';
import cors from 'cors';
import Routes from "./routes/routes.js";
import bodyParser from 'body-parser';
const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Routes);  //("/) > default end point 

const username  = process.env.DB_USERNAME;
const password  = process.env.DB_PASSWORD;
const PORT = 8001;
Connection(username,password);

app.listen(PORT,()=>console.log("server is running successfully on port 8001"));