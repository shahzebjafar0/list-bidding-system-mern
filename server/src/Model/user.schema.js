const mongoose = require('mongoose');
const utils = require("../Utils")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide an email address'],
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    },
    password: { type: String, minLength: 6, required: [true, 'Please provide a password'] },
    verify: { type: Boolean, default: false }
});

userSchema.pre('save', async function (next) {
    try {
        this.password = await utils.bcrypt.encryptPassword(this.password)
    } catch (err) {
        console.log(err)
    }
    next()
})

userSchema.methods.checkPassword = async function (userSignInPass, userOriginalPass) {
    return await utils.bcrypt.verifyPassword(userSignInPass, userOriginalPass)
}

module.exports = mongoose.model('User', userSchema);