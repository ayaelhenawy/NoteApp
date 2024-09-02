import express from 'express'
import { query } from '../../../DB/dbConnection.js';
const router=express.Router();


router.put('/updatenote',(req,res)=>{
    let {id,title,description}=req.body;
    query.execute(`update notes set description='${description}'where id=${id}`);
        res.json({"message": "sucsess"});
  })

  export default router