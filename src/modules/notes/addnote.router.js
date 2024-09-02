
import express from 'express'
import { query } from '../../../DB/dbConnection.js';
const router =express.Router();


router.post('/addnote',(req,res)=>{
    let {title,description}=req.body;
    query.execute(`insert into notes (title,description) values ('${title}','${description}')`);
        res.json({"message": "sucsess"});
  })
  
  export default router