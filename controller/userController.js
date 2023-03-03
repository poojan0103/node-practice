const User = require('../model/userSchema')
const jwt =   require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secertkey = "seceretkey"
const crypto = require('crypto')
const registeruser =async(req,res)=>{
    try {
        const { name, email,password } = req.body;

        //check if user exists
        const existingUser = await User.findOne({ $or :[{ name}, {email},{password}]});

        if(existingUser){
            return res.status(400).json({ message : 'name or email already taken'})
        }
        // const hashPassword = await bcrypt.hash(password,10)
        // const user = await User.create({name,email,password})
        // const token = jwt.sign({ id:user._id},secertkey, {expiresIn: '1d'});
        // res.status(201).json({ user,token})
        const token = crypto.randomBytes(20).toString('hex')
        const user = new User({name,email,password,token})
        await user.save();
        res.status(201).json({user})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internalserver error"})
        
    }
}


// exports.registeruser =   async (req,res) =>{
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.json(
//             {id:user._id,
//             name:user.name,
//             email:user.email})        
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error : 'Error'})
        
//     }
// };
module.exports = {
    registeruser,
}