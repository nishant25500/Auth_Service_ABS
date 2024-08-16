const dotenv  = require('dotenv');

dotenv.config(); //this call our env file

module.exports = {
    PORT: process.env.PORT
}