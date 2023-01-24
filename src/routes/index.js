const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");

router.get("/", function (req, res) {
    console.log(req.body);
    res.send("Hello");
});

// ! User Routes
router.post("/user", UserController.createU);
router.delete("/user/:id", UserController.deleteU);

module.exports = router;
