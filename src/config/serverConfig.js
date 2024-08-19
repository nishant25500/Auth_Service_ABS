const dotenv  = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config(); //this call our env file

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(10)
}