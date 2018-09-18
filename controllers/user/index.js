const express     = require('express');
const userService = require('../../services/user');

const router = express.Router();

router.get('/', (req, res, next) => {
    userService.getUsers()
        .then(data => res.status(200).json(data))
        .catch(err => next(err));
});

module.exports = router;