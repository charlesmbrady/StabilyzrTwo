const path = require('path'); // Lets us use __dirname as the relative filepath from this file
require('dotenv').config(path.join(__dirname, '../.env'));

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'stabilyzr_dev',
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
    },
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL', //add this back if I try to use the coverage tests in CI again
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'stabilyzr_test',
    details: {
      host: 'localhost', // use 'localhost' if go back to using this step in CI
      port: 3306,
      dialect: 'mysql',
    },
  },
  production: {
    use_env_variable: 'JAWSDB_URL',

    details: {
      host: 'c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      username: 'ewmlyqjt30a4ewi0',
      password: 'jzmpiwgyslmbh41g',
      database: 'g1xlb2hedlnspfme',
      port: 3306,
      dialect: 'mysql',
    },
  },
};
