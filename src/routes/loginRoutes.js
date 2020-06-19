const express = require('express');
const loginRouter = express.Router();
function router2(nav){

loginRouter.get('/',function(req,res){
    res.render("login",
    {
    nav,
     title:'Library'
    });
    });
return loginRouter;
}
module.exports = router2;