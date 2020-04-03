var mongoose = require('mongoose')

var catagorymodel = new mongoose.model('catagory' , new mongoose.Schema ({
_id:mongoose.Schema.Types.ObjectId,
catagoryNAME: String ,
price_unit:{type:String , max:10000 , min:10},
colors:{type:[String] , enum:["green" , "blue" , "black"]},
MADE_IN:{type:String , required:true},
WARANTY:{type:String , required:true},
items:[{type:mongoose.Schema.Types.ObjectId , ref :'items'}]
}))

module.exports = catagorymodel