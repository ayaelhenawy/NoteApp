 import express from 'express'
import { query } from '../../../DB/dbConnection.js';
const router= express.Router();
query
router.get('/',(req,res)=>{
    query.execute("select* from notes",(err,data)=>{
      if(err){
        res.json({"message": "error"});
      }
      else res.json(data);
    })
  })
  export {
    router
  }