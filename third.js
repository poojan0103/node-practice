const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 9
const password = "Poojan@123"
const secretkey = "secretkey"

const employeeroutes = require("./routes/employeeRoutes")
const PORT = 3000
bcrypt.genSalt(saltRounds).then(salt =>{
    console.log('salt : ',salt);
    return bcrypt.hash(password,salt)
}).then(hash =>{
    console.log('hash : ',hash)
    
}).catch(err => console.log(err.message))
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("file")
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.post("/upload",upload,(req,res)=>{
    res.send("uploaded")
})
app.use('/emp',employeeroutes)
app.listen(PORT, () => {
  console.log('server is running on port', PORT)
});
app.delete("/hello/:id", (req, res) => {
        console.log(req.params.id);
        let id = req.params.id;
        res.send("Deleted ..." + id)
})

app.get("/",(req,res)=>{
    res.json({
        "message":"Welcome to the server"
    })
})
app.post("/login",(req,res)=>{
    const user ={
        username:"Poojan",
        email:"abc@gmail.com"
    }
    jwt.sign({user},secretkey,{expiresIn:'3000s'},(err,token)=>{
        res.json({
            token:token,
            user:user
        })
    })
})
app.get('/profile',verifytoken,(req,res)=>{
    jwt.verify(req.token,secretkey,(err,authdata)=>{
        if(err){
            res.status(401).send("Invalid token")
            }
            else{
                res.json(authdata)
                }
            

    })

})
function verifytoken(req,res,next){
    const barerHeader = req.headers['authorization'];
    if(typeof barerHeader !== 'undefined'){
        const token = barerHeader.split(' ')[1];
        req.token = token
        next();

    }else{
        res.send({
            result:'Token is not valid'
        })
    }
}