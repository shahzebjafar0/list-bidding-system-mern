const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const verifyPassword = async (password, userPassword) => {
    return bcrypt.compare(password, userPassword);
}

module.exports = { encryptPassword, verifyPassword };