const mongoose=require('mongoose')
const express=require("express")
const cors=require('cors')
const AdminModel=require('./Model/Admin')
const DetailsModel =require('./Model/Details')
const app=express();
app.use(cors())
app.use(express.json())


  mongoose.connect('mongodb://localhost:27017/Blogdetails')
  .then(()=>console.log("connected to db"))
  app.post('/register',(req,res)=>{
    DetailsModel.create(req.body )
    .then(Details => res.json(Details))
    .catch(err=>res.json(err))
})

app.post('/AdminSign',(req,res)=>{
    AdminModel.create(req.body )
    .then(Admin => res.json(Admin))
    .catch(err=>res.json(err))
})
app.get("/register",(req,res)=>{
    res.send('working ')
})
app.get('/getUsers' ,(req,res)=>{
    AdminModel.find({}).sort('-date') 
 
    .then(Admin => res.json(Admin))
    .catch(err=>res.json(err))

})
app.listen(3001, () => {
    console.log(` listening on port 3001`);
  });