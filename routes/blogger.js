var express = require('express');
const multer=require('multer');
var router = express.Router();
// blogger controller
var blogger_reg=require('../bloggercontroller/blogger_register_controller');
var blogger_login=require('../bloggercontroller/blogger_login_controller');
var add_blog=require('../bloggercontroller/add_blog_controller');
var view_blog=require('../bloggercontroller/view_blog_controller');
var manage_blog=require('../bloggercontroller/manage_blog_controller');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })
/* GET users listing. */

//blogger
//register blogger
router.post('/insert_blogger_reg',blogger_reg.insert);
router.get('/blogger_reg',blogger_reg.geta_data);

//blogger login
router.post('/insert_blogger_login',blogger_login.insert);
router.get('/select_blogger_login',blogger_login.geta_data);
router.post('/blogger_login',blogger_login.login);
router.get('/blogger_logout',blogger_login.logout);

//add blog
router.post('/insert_blog',upload.single('image'),add_blog.insert);

//view blog
router.get('/view_blog',view_blog.geta_data);

//manage blog
router.get('/delete_blog/:id',manage_blog.delete_data);
router.post('/update_blog/:id',manage_blog.update_data);


module.exports = router;