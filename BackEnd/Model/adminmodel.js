let mongoose=require('mongoose')
let adminsch=new mongoose.Schema({
    "_id":String,
    "pwd":String,
    "name":String
})
let admin=mongoose.model("admin",adminsch)
module.exports=admin