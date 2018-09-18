const userRouter = require('../controllers/user');

function init(server) {
    server.use('/user', userRouter);
}

module.exports = {
    init: init
};