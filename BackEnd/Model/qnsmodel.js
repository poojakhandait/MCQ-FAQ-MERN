let mongoose=require("mongoose")
let qnssch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "op1":String,
    "op2":String,
    "op3":String,
    "op4":String,
    "op5":String,
    "ans":String,
    "subject":String

})
let qns=mongoose.model("qns",qnssch)
module.exports=qns