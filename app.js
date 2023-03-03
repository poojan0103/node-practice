const path = require('path')
const cookieparser = require('cookie-parser')
const express = require('express')
var search = require('./model/search')
const app = express()
const emproutes = require("./routes/employeeRoutes")
// const chalk = require("chalk")
const reqfilter = require('./middleware')
const bodyParser = require('body-parser')
// const errorhandler = require('./errorhanding')
// var bodyParser = require('body-parser')

app.use(express.json())
const route = express.Router();
// route.use(reqfilter)
const { query } = require('express')
const { parse } = require('path')
// const { searchData } = require('./search')
const PORT = 3000
// app.set('view engine', 'ejs');
// const publicpath = path.join(__dirname);

//const color = require('colors')

// console.log(chalk.red('Hello world!'));
// app.use(express.static(publicpath))
// console.log(publicpath)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieparser())
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})

//app.use(reqfilter)

//  app.get('/hi', (req, res) => {
//      res.send(

//          `<input type ="text" placeholder = "Enter a Name" "value =${req.query.name}" >
//          <br><a href="/about">go to about pge</a>`)
//         })


//         route.get('/about', reqfilter,(req, res) => {
//             res.send([{
//                 name: 'sam',
//                 age: 21
//             },
//             {
//                 email: 'sam@gmail.com'
//             }

//         ])
//     })

// app.post('/hello', (req, res) => {
//     res.send("Hello World ")
//     console.log(req.body)
// });Rounds = 10
// app.delete("/hello/:id", (req, res) => {
//     console.log(req.params.id);
//     let id = req.params.id;
//     res.send("Deleted ..." + id)

// });
// app.put("/hello/:id", (req, res) => {
//     try {
//         var id = req.params.id;
//         if (id == 1) {
//             throw new Error("user not found")
//         } else {
//             res.send({
//                 message: "user updated",
//                 id: id,
//                 data: req.body.data
//             })

//         }
//     } catch (err) {
//         res.status(404).send(err.message)

//     }
// })
// app.get('/profile', (req, res) => {
//     res.render('profile')
// })
// app.use('/',route)

// app.get('/employee/:age', (req, res) => {
//     try {
//         const age = req.params.age;
//         if (age < 18) {
//             throw new Error("employee not found");
//         } else {
//             const  employee = search.searchData(age)

//             res.json(employee)
//         }

//     } catch (err) {
//         res.status(404).send(err.message);

//     }
// })

// app.get('/employees/:salary',(req,res)=>{
//     var salary = req.params.salary
//     try{
//         if(salary<20000){
//             throw new Error("Employee not found");
//         }else{
//             var employee = search.searchData1(salary)
//             res.json(employee)
//         }
//     }catch(err){
//         res.status(400).send(err.message)

//     }
// })
// app.get('/employeess/:status',(req,res)=>{
//     const status = req.params.status
//     try{
//         if(status == false ){
//             throw new Error("Employee not found");
//         }else{
//             var employee = search.searchData2(status)
//             res.json(employee)
//         }
//     }catch(err){
//         res.status(400).send(err.message)

//     }
// })

// app.get('/',(req,res)=>{
//     res.cookie('Name', 'ram')
//     res.cookie('email', 'ram@123')
//     res.cookie('gender', 'male')
//     res.cookie('age', 21)
//     res.send("Welcome")    
// })
// app.get('/cookies',(req,res)=>{
//     res.send(req.cookies)
// })

app.use('/emp', emproutes)