let express=require('express')
const { userreg, userlogin, getdet, upscore } = require('../Controller/usercontroller')
const { adminreg, adminlogin, islogin, isadmin } = require('../Controller/admincontroller')
const { addqns, getqns } = require('../Controller/qnscontroller')

let route=new express.Router()
route.post("/userr",userreg)
route.post("/userlogin",userlogin)
route.post("/adminreg",adminreg)
route.post("/adminlogin",adminlogin)
route.post("/addqns",islogin,isadmin,addqns)
route.get("/getqns/:filter",islogin,getqns)
route.get("/getuser/:name",islogin,getdet)
route.post("/upmarks",islogin,upscore)


module.exports=route