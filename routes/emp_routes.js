let express=require('express');
let router=express.Router();
let bcrypt = require('bcrypt');
let {users} = require('../models/users');



router.post("/register",async(req,res)=>{
    let data = req.body
    data.password=await bcrypt.hash(data.password,10);
    let newuser = new users(data);
    let result = await newuser.save();
    res.send(result);
})
router.post("/login",async(req,res)=>{
    let user = await users.findOne({email:req.body.email});
    if(user){
        let passmatch = await bcrypt.compare(req.body.password,user.password);
        if(passmatch){
            res.send("Login Success");
        }else{
            res.send("password invalid");
        }
    }else{
        res.send("Email Invalid");
    }
})
router.get("/viewtasks",(req,res)=>{
    res.send("viewtasks page called");
})
router.get("/viewtodo",(req,res)=>{
    res.send("view to do page called");
})
router.put("/updateprofile",(req,res)=>{
    res.send("update profile page called");
})
module.exports=router;