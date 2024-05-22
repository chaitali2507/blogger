var express = require('express');
const multer=require('multer');
var router = express.Router();
var admin_login=require('../admincontroller/login_controller');
var add_blog= require('../admincontroller/add_blog_controller');
var view_blog=require('../admincontroller/view_blog_controller');
var manage_blog= require('../admincontroller/manage_blog_controller');
var add_category=require('../admincontroller/addblog_category_controller');
var view_category=require('../admincontroller/viewblog_category_controller');
var manage_category=require('../admincontroller/manageblog_category_controller');
var single_blog=require('../admincontroller/single_view_blog_controller');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

/* GET home page. */

//admin login
router.post('/insert',admin_login.insert);
router.get('/',admin_login.geta_data);
router.post('/login',admin_login.login);
router.get('/logout',admin_login.logout);

//add blog
router.post('/insert_blog',upload.single('image'),add_blog.insert);

//view blog
router.get('/view_blog',view_blog.geta_data);

//manage blog
router.get('/delete_blog/:id',manage_blog.delete_data);
router.post('/update_blog/:id',manage_blog.update_data);

//add blog category
router.post('/insert_category',upload.single('image'),add_category.insert);


//view blog category
router.get('/view_category',view_category.geta_data);
module.exports = router;

//manage blogcategory
router.get('/delete_blog_category/:id',manage_category.delete_data);
router.post('/update_blog_caategory/:id',manage_category.update_data);

//single view blog
router.get('/single_view/:id',single_blog.view_data);

module.exports=router;