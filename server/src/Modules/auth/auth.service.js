const models = require("../../Model")
const utils = require("../../Utils");
const services = require("../../Services")


const register = async ({ name, email, password, role }) => {

    const existingUser = await models.user.findOne({ email });
    if (existingUser) {
        throw new utils.appError("email alreay exists", 403)

    }
    const newUser = new models.user({
        fullName: name,
        email,
        password: password,
    });
    await newUser.save()
    const token = utils.jwt.createToken({ userId: newUser._id })
    const emailSubject = 'Registration Token';
    const emailText = "Click the following link to complete your registration: "
    const html = `<button href="${process.env.BASE_URL}/register/${token}/confirm"> Confirm Registration</button>`
    const res = await services.email(email, emailSubject, emailText, html);
    return res
}

const login = async ({ email, password }) => {
    const user = await models.user.findOne({ email });
    if (!user || !(await user.checkPassword(password, user.password))) {
        throw new utils.appError('Incorrect Email or Password', 401)
    }

    if (!user.verify) {
        const token = utils.jwt.createToken({ userId: user._id })
        const emailSubject = 'Registration Token';
        const emailText = "Click the following link to complete your registration: "
        const html = `<button> <a href="${process.env.BASE_URL}/register/${token}/confirm"> Confirm Registration </a> </button>`
        const res = await services.email(email, emailSubject, emailText, html);
        throw new utils.appError('Email not Verified', 550)
    }
    const userResponse = {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
    };
    const token = utils.jwt.createToken({ userId: user._id, role: user.role })
    return {user:userResponse,token}

}

const confirmRegistration = async ({ id }) => {

    const decodedToken = utils.jwt.verifyToken(id);

    const user = await models.user.findById(decodedToken.userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    user.verify = true;
    await user.save();
    const userResponse = {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
    };
    const token = utils.jwt.createToken({ userId: user._id, role: user.role })
    return {user:userResponse,token}

}

module.exports = {
    register,
    login,
    confirmRegistration
};

