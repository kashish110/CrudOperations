const mongoose=require('mongoose')

const DetailSchema=new mongoose.Schema({
    name:String,
    author:String,
    content:String
})
const DetailsModel=mongoose.model("Details",DetailSchema)
module.exports=DetailsModel