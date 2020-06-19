const express = require('express');
const loginRouter = express.Router();
function router2(nav){
var username = document.getElementById("use");
var password = document.getElementById("pwd1"); 

function validate(){
     if(use.value.trim()==""|| pwd1.value.trim()==""){
       alert("fill the requirements");
        return false;
     }
     else{
         return true; 
         alert("correct validation");
     }
    
}
loginRouter.get('/login',function(req,res){
    res.render("login",
    {
    nav
    // title:'Library'
    });
    });
return loginRouter;
}
module.exports = router2;