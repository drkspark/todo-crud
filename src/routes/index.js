const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    console.log(req.body);
    res.send("Hello");
});

module.exports = router;