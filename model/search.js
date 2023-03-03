var fs = require("fs");
const employees = require('./employee.json')
var employee =[]
async function readData(){

    // console.log(employees);

    // let emp = fs.readFileSync('./employee.json'); //string
    // employee = JSON.parse(emp); //object
    // let emp = employees
    // employee = JSON.parse(employees)
        //employee.find
    // debugger;
    // await fs.readFile("employee.json",function (err,data){
    //     if(err) throw err;
    //     const employee = JSON.parse(data);
    //     console.log(employee);
    // }); //string
    // console.log(emp)
    // employee = JSON.parse(emp); //object
    
}


function searchData(age){

        readData();

        employee = employees.find((emp)=>{
            return emp.age == age
        })

        return employee;
}

function searchData1(salary){

    readData();

    employee = employee.filter((emp)=>{
        return emp.salary == salary
    })

    return employee;
}

function searchData2(status){

    readData();

    employee = employee.filter((emp)=>{
        return emp.status == status
    })

    return employee;
}

module.exports = {searchData,searchData1,searchData2,readData}