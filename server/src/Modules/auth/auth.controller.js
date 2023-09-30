const authService = require("./auth.service");
const dto = require("../../Dto")
const middleware = require("../../Middlewares")


const register = async (req, res, next) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body;

        if (!middleware.validateInput({ name, email, password }, dto.register, res)) {
            return;
        }

         await authService.register({ name, email, password });
        res.status(200).json({ message: 'Registered successfully' });
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        if (!middleware.validateInput({ email, password }, dto.login, res)) {
            return;
        }

        const {user,token} = await authService.login({ email, password });
        res.setHeader('Authorization', `Bearer ${token}`);
        res.json({ user,token, message: 'Login successful' });
    } catch (error) {
        // console.log(error)error message not sent
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json({ user });
    } catch (error) {
        next(error)
    }
}

const confirmRegistration = async (req, res, next) => {
    try {
        const {token:id} = req.body;
        const results = await authService.confirmRegistration({id});
        res.json({ token : results.token, user:results.user, message: 'Login successful' });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    getUser,
    confirmRegistration
};
