var view_blog=require('../bloggermodel/add_blog_model');
  
 exports.geta_data=async (req,res)=>{
    var data= await view_blog.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 