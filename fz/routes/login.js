var express = require('express');
var router = express.Router();
var myModel=require("../database/get_model").get_model;

router.get('/',function(req, res, next){
res.render('login',{title: 'loginPage'})
var user={
        username:req.body.username,
        password:req.body.password}
  req.session.user=user;
});

router.post('/',function(req,res,next){
var docs={username:req.body.username,password:req.body.password};
myModel.count(docs,function(err,doc){
if(err) console.log(err);
else
{
	if(doc==1)
	{
		res.render('first.ejs',
			{title: req.body.username,
			username:'sessiontest'}
			);
	}
	else
	{
		res.render('login',{title: '用户名密码错误'});
	}
}
});
});

module.exports=router;