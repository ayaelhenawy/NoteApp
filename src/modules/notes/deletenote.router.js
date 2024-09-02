import express from 'express'
import { query } from '../../../DB/dbConnection.js';
const router=express.Router();
router.delete('/deletenote',(req,res)=>{
    let {id}=req.body;
    query.execute(`delete from notes where id=${id}`);
        res.json({"message": "sucsess"});
  })

  export default router