let express = require('express');
let router = express.Router();

router.get("/employees",(req,res)=>{
    res.send("Employees called");
});

router.post("/assign-task",(req,res)=>{
    res.send("Assign task page called");
});

router.get("/tasks",(req,res)=>{
    res.send("Tasks");
});

router.get("/notifications",(req,res)=>{
    res.send("Notifications");
});

module.exports=router;