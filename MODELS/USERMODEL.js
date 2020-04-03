var mongoose = require('mongoose')
let studentmodel = new mongoose.model('student', new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String , maxlength:100},
    age:{type:Number , maxlength:2},
    address:{type:String , maxlength:100},
    phone:{type:String  , maxlength:13},
    password:{type:String , maxlength:12  , required:true},
    email:{type:String , required:true}
    // class:{type: mongoose.Schema.Types.ObjectId , ref:'class'}


}))

module.exports = studentmodel