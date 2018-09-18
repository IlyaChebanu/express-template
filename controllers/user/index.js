const express     = require('express');
const userService = require('../../services/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const data = await userService.getUsers();
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;