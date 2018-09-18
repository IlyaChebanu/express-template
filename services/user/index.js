const userModel = require('../../models/user');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.getAllUsers()
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

const getUserById = (req, res) => {

};

const createUser = (req, res) => {

};

exports.getUsers = getUsers;