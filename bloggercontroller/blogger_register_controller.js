var blogger_reg=require('../bloggermodel/blogger_register_model');
  

 exports.insert=async (req,res)=>{
   
    var data= await blogger_reg.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
 } 
 exports.geta_data=async (req,res)=>{
    var data= await blogger_reg.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 