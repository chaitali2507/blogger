var express = require('express');
var router = express.Router();
var user_reg=require('../usercontroller/user_reg_controller');
var user_login=require('../usercontroller/user_login_controller');
var view_blog=require('../usercontroller/view_blog_controller');
var user_like=require('../usercontroller/like_blog_controller');
var user_comment=require('../usercontroller/comment_blog_controller');

/* GET users listing. */
//register user
router.post('/insert_user_reg',user_reg.insert);
router.get('/user_reg',user_reg.geta_data);

//user login
router.post('/insert_user_login',user_login.insert);
router.get('/select_user_login',user_login.geta_data);
router.post('/user_login',user_login.login);
router.get('/user_logout',user_login.logout);

//view blog
router.get('/view_blog',view_blog.geta_data);

//user like
router.post('/insert_user_like',user_like.insert);
router.get('/user_like',user_like.geta_data);

//user comment
router.post('/insert_user_comment',user_comment.insert);
router.get('/user_comment',user_comment.geta_data);

module.exports = router;
