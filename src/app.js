const {Router} = require('express');
const router = Router();
const db = require('./db');


router.get('/', function(req, res){
   res.header("Content-Type","text/html");
   res.sendFile("./public/index.html", { root: __dirname })
});

module.exports = router