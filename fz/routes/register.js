var express = require('express');
var router = express.Router();
var myModel=require("../database/get_model").get_model;
var Operator=require("../database/Operator").userModel;

router.get('/',function(req, res, next){
res.render('register',{title: 'registerPage'})
});
router.post('/',function(req,res,next){
//var docs = {username:req.body.usernameAdd,password:req.body.passwordAdd};
var mods={username:req.body.username};
myModel.findOne(mods,function(err,mod){

if(err)
  console.log(err);
else
{
  if(mod!=null)
    {
console.log('got');
res.render('register',{ title: '用户名已经存在' });

  }
    
  else
  {
    console.log('err');
    var docs={username:req.body.username,password:req.body.password};
    var modelEntity=new myModel(docs);
    modelEntity.save(function(err,doc){

      if(err)
        console.log(err);
      else
{
        res.redirect('login');
      
    }

    });
  }
}   


});

  
});
module.exports=router;