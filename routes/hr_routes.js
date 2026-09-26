let express = require('express');
let router = express.Router();
let {users}=require('../models/users');

router.get("/employees",async(req,res)=>{
    let result=await users.find()
    result.password=undefined;
    res.send(result);
});

router.delete("/deleteemp/:id",async(req,res)=>{
    let result =await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send("emp record deletion success")
    }
    res.send("delete route called");
})

router.post("/assign-task",(req,res)=>{
    res.send("Assign task page called");
});

router.get("/tasks",(req,res)=>{
    res.send("Tasks");
});

router.get("/notifications",(req,res)=>{
    res.send("Notifications");
});

router.patch("/updateprofile/:id",async(req,res)=>{
    let data=req.body;
    if(data.password){
        data.password=await bcrypt.hash(data.password,10);
    }
    let updatedata=await users.findByIdAndUpdate(req.params.id,{$set:data});
    res.send(updatedata);
})

module.exports=router;