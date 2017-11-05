var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.user){
        var user=req.session.user;
        var name=user.username;
        res.send('你好'+username+'，欢迎来到我的家园。');
    }else{
        res.send('你还没有登录，先登录下再试试！');
    }
});

module.exports = router;
