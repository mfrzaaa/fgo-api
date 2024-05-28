const fgoControllers = require('./fgo-controller');
const userControllers = require('./user-controller');
const authControllers = require('./auth-controller');

module.exports = {
    ...fgoControllers,
    ...userControllers,
    ...authControllers,
}