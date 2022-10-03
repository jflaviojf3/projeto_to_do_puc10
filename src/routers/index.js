const express = require('express');
const router = express.Router();


router.get("/", (req, res) =>{
    console.log("Hello Worlds");
    res.send("Hello API v1.0, CrudTodo")
})

module.exports = router;