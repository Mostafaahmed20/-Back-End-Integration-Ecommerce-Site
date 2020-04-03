var mongoose = require('mongoose')
var itemMODEL = new mongoose.model('items',new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
item_Name:{type:String , maxlength:120  , required:true},
price_Item:{type:String , max:100000 , min:10},
Memory_RAM:{type:String , required:false},
color:{type:String},
PRODUCT_INFORMATION:{type:String},
catagory:{type:mongoose.Schema.Types.ObjectId , ref:'catagory'}


}))


module.exports = itemMODEL