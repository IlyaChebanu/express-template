const userModel = require('../../models/user');

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await userModel.getAllUsers();
            resolve(users);
        } catch (err) {
            reject(err);
        }
    });
};

const getUserById = (req, res) => {

};

const createUser = (req, res) => {

};

exports.getUsers = getUsers;