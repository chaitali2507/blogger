var mongoose= require('mongoose');

var userschema =new mongoose.Schema({
    name:{
        type:String
    },
    date:{
        type:String
    },
    comment:{
        type:String
    },
})
module.exports =mongoose.model("user_comment",userschema);