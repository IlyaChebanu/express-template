const db = require('../../config/database');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users;', (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};


const userModel = {
    getAllUsers,
};

module.exports = userModel;