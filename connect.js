var mongoose = require('mongoose')


function connection(){
    mongoose.connect('mongodb://localhost/MYAPP2' ,{ useNewUrlParser: true })
    .then(()=>console.log('connected sucssesfuly ...........'))
    .catch(Error => console.log(Error))
}

module.exports = connection