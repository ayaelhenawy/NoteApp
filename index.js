const express =require('express');
const app=express();
const mysql=require('mysql2');
const cors=require('cors');
const query=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'noteapp'
});


 app.use(express.json());
 app.use(cors());



app.post('/addnote',(req,res)=>{
  let {title,description}=req.body;
  query.execute(`insert into notes (title,description) values ('${title}','${description}')`);
      res.json({"message": "sucsess"});
})
app.get('/',(req,res)=>{
  query.execute("select* from notes",(err,data)=>{
    if(err){
      res.json({"message": "error"});
    }
    else res.json(data);
  })
})

app.put('/updatenote',(req,res)=>{
  let {id,title,description}=req.body;
  query.execute(`update notes set description='${description}'where id=${id}`);
      res.json({"message": "sucsess"});
})
app.delete('/deletenote',(req,res)=>{
  let {id}=req.body;
  query.execute(`delete from notes where id=${id}`);
      res.json({"message": "sucsess"});
})




app.listen(3000,()=>{
  console.log("server is running ..");
}
)

