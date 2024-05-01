const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://mohankrishnateja2015:mkt12345@cluster0.pxhoscv.mongodb.net/PAYTM");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('user',userSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
	Account
}

module.exports = {
    User
}
