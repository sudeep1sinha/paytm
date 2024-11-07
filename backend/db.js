const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect('mongodb+srv://admin:Ss4NN61xFeTGg382@sudeepcluster.pw8oh60.mongodb.net/paytm')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique: true,
        minLength:3,
        maxLength:30
    },
    password : {
        type:String,
        required: true,
        minLength:8
    },
    firstName : {
        type : String,
        required : true,
        maxLength: 30
    },
    lastName : {
        type : String,
        required : true ,
        maxLength:30
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
});

const User = mongoose.model('User' , UserSchema);
const Account = mongoose.model('Account',accountSchema);

module.exports = {
    User,
    Account
}
