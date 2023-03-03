// const employees = require('../model/employee.json')
// const employee = require('../model/employee')
const search  = require('../model/search')

exports.getEmployee = ((req,res)=>{
    try {
                const age = req.params.age;
                if (age < 10) {
                    throw new Error("employee not found");
                } else {

                    const  employee = search.searchData(age)
                    
        
                    res.json(employee)
                }
                // console.log(age);
        
            } catch (err) {
                res.status(404).send(err.message);
        
            }

//     if(err){
//         res.status(501).json({
//             message : "Error"
//         })
        
//     }else{
//         res.status(200).json({
//             message : "found",
//             data : employees
//         })
//     }
    
})
