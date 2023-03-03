


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token : {
    type: String,
    required: true,
    unique: true
  }
});

// userSchema.pre('save', function(next) {
//   const user = this;

//   if (!user.isModified('password')) {
//     return next();
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }

//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }

//       user.password = hash;
//       next();
//     });
//   });
// });

module.exports = mongoose.model("user",userSchema)




















// const mongoose =   require('mongoose')
// const Schema =    mongoose.Schema;
// const userSchema = Schema({
//     name: {
//         type: String,
//         required: true
//         },
//         email:{
//             type: String,
//             required: true
//         },
//         password:{
//             type: String,
//             required: true
//         },
//         // type:{
//         //     type: Number,
//         //     required: true
//         // }
// })
// module.exports = mongoose.model("user",userSchema)