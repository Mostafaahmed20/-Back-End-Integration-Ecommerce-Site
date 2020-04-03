let server = require('express')
let EXPRESS_SESSION = require('express-session')
const { v4: uuidv4 } = require('uuid');
let app = server()
let CONNECTIONDB = require('./connect')
let USER_API = require('./APIS/USER-API')
let ITEM_API = require('./APIS/ITEAM-API')
let catgory_API = require('./APIS/catagory-API')
let bodyparser = require('body-parser')
let cookie_parser = require('cookie-parser')
let port = process.env.port || 9000


app.use(EXPRESS_SESSION({
    genid:uuidv4,
    "secret":"mysession"
}))
app.use(bodyparser.json())
app.use(cookie_parser())
CONNECTIONDB(app)
USER_API(app)
ITEM_API(app)
catgory_API(app)

app.listen(port , ()=>console.log(`app is listen to port ${port}`))
