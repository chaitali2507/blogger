var manage_blog=require('../adminmodel/add_blog_model');
  

 
 exports.delete_data=async (req,res)=>{
    var id= req.params.id;
    var data= await manage_blog.findByIdAndDelete(id);

    res.status(200).json({
        status:"data delete",
    })
 } 
 exports.update_data=async (req,res)=>{
    var id= req.params.id;
    var data= await manage_blog.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data updated",
        data
    })
 } 
