const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please fill in your name']
    },
    email:{
        type:String,
        required:[true, 'Please fill in your email']
    },
    password:{
        type:String,
        required:[true, 'Please fill in your password']
    }
})

module.exports = mongoose.model('User', userSchema)


