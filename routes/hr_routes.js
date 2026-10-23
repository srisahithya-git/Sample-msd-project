const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { users } = require('../models/users');

router.get("/employees", async (req, res) => {
    let result = await users.find().select("-password");
    res.send(result);
});

router.delete("/deleteemp/:id", async (req, res) => {
    let result = await users.findByIdAndDelete(req.params.id);

    if (result) {
        res.send("emp record deletion success");
    } else {
        res.send("employee not found");
    }
});

router.post("/assign-task", (req, res) => {
    res.send("Assign task page called");
});

router.get("/tasks", (req, res) => {
    res.send("Tasks");
});

router.get("/notifications", (req, res) => {
    res.send("Notifications");
});

router.patch("/updateprofile/:id", async (req, res) => {
    let data = req.body;

    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }

    let updatedata = await users.findByIdAndUpdate(
        req.params.id,
        { $set: data },
        { new: true }
    );

    res.send(updatedata);
});

module.exports = router;