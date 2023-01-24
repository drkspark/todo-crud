const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");
const TaskController = require("../controllers/task-controller");

router.get("/", function (req, res) {
    console.log(req.body);
    res.send("Hello");
});

//! User Routes
router.post("/user", UserController.createU);
router.delete("/user/:id", UserController.deleteU);

//! Task Routes
router.post('/task', TaskController.createT);
router.delete('/task/:id', TaskController.deleteT);


module.exports = router;
