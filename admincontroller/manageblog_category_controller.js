var manage_category=require('../adminmodel/addblog_category_model');
  

 
 exports.delete_data=async (req,res)=>{
    var id= req.params.id;
    var data= await manage_category.findByIdAndDelete(id);

    res.status(200).json({
        status:"data delete",
        
    })
 } 
 exports.update_data=async (req,res)=>{
    var id= req.params.id;
    var data= await manage_category.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data updated",
        data
    })
 } 
