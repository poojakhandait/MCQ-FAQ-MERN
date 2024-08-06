const qns = require("../Model/qnsmodel")
let{v4:uuidv4}=require("uuid")

let addqns=async(req,res)=>{
    try{
        let id=uuidv4()
        let data= new qns({...req.body,"_id":id})
        await data.save()
        res.json({"msg":"Question Is Added"})

    }
    catch(err)
    {
        console.log(err)
    }
}

let getqns=async(req,res)=>{
    try{
     let data=await qns.aggregate([{$match:{"subject":req.params.filter}},{$sample:{"size":10}}])
     res.json(data)
     }
     catch(err){
       console.log(err)
     }
   }

module.exports={addqns,getqns}