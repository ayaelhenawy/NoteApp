import express, { json } from 'express';
const app=express();
import cors from 'cors';
import {query}from './DB/dbConnection.js'
import { router } from './src/modules/notes/allNotes.router.js' 
import addnote from './src/modules/notes/addnote.router.js'
import updatenote from './src/modules/notes/updatenote.router.js'
import deletenote from './src/modules/notes/deletenote.router.js'

 app.use(json());
 app.use(cors());
 app.use(router);
 app.use(addnote);
 app.use(updatenote);
 app.use(deletenote);


app.listen(3000,()=>{
  console.log("server is running ..");
}
)

