var view_category=require('../adminmodel/addblog_category_model');
  
 exports.geta_data=async (req,res)=>{
    var data= await view_category.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 