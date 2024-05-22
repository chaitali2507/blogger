var user_like=require('../usermodel/like_blog_model');
  

 exports.insert=async (req,res)=>{
   
    var data= await user_like.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
 } 
 exports.geta_data=async (req,res)=>{
    var data= await user_like.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 