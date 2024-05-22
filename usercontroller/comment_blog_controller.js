var user_comment=require('../usermodel/comment_blog_model');
  
exports.insert=async (req,res)=>{
    var data= await user_comment.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
 } 
 exports.geta_data=async (req,res)=>{
    var data= await user_comment.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 