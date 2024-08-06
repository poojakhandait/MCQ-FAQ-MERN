let mongoose=require('mongoose')
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "bscore":String,
    "phone":Number,
    "score":[]
    
})
let user=mongoose.model("user",usersch)
module.exports=user