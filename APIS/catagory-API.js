var mongoose = require('mongoose')
var catagory_model = require('../MODELS/catagoryModel')
// var usermodel = require('../MODELS/USERMODEL')

function catagory_API(app){

    function formatecokkie(sid){
        return (
            sid.split(':')[1].split('.')[0]
        )
        

    }

    function athuntacte(req , res  , next){
        let sid = formatecokkie(req.cookies['connect.sid'])
        if(req.session.user&& sid === req.sessionID){
         next()
        }else{
            res.json({massage:"not autorized ......."})
        }
        
        }


app.post('/insertCatgory' ,athuntacte ,async (req ,res) =>{

try{

const {catagoryNAME , price_unit , colors , MADE_IN , WARANTY} = req.body 
let newCatgory = new catagory_model({
    _id:mongoose.Types.ObjectId(),
    catagoryNAME , 
    price_unit ,
    colors , 
    MADE_IN ,
    WARANTY , 


})

await newCatgory.save()
res.json({massage:"sucsses created"})
}
 
catch(error){
    console.log(error)
}

})


app.get('/getAllCatgory' ,  (req , res)=>{
try{
      catagory_model.find({}).exec((err , data)=>{
       err?
       res.json({massage:"error"})
       :
       res.json({massage:"sucsses" , data})


    })
    
}
    
catch(error){
    console.log(error)
}
})





}
module.exports = catagory_API