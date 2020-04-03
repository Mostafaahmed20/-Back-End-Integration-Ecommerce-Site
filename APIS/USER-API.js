let mongoose = require('mongoose')
let usermodel = require('../MODELS/USERMODEL')

function USERAPI(app){
app.post('/signup' ,async (req , res)=>{
    const{name , age , address , phone , password , email } = req.body
try{
    let user = new usermodel({
        _id:mongoose.Types.ObjectId(),
        name,
        age,
        address,
        phone,
        password,
        email

    })
    let savedata = await user.save()
    res.send(savedata) 
}
catch(error){
console.log(error)
}
})



app.post('/login' , async (req ,res)=>{
   const{name , password } = req.body
     try{
        
      let user = await usermodel.findOne({name , password})
    if(user){
        req.session.user = user
        res.json({massage:`logged in sucssefuly ${user.name} `})
    }else if(!user){
        res.json({massage:`wrong username or password`})

    }
    }
    catch(error){
        console.log(error)
    }
    

})


app.post('/logout' , async (req , res)=>{
try{
    await req.session.destroy()
    res.json({massage:"logged out "})
}
catch(error){
    console.log(error)
    
}
})
}
module.exports = USERAPI