const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;