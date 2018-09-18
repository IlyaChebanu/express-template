const user  = require('../models/user');

describe('User model', () => {
    describe('getAllUsers method', () => {
        it('Should be defined', () => {
            expect(user.getAllUsers).toBeDefined();
        });
        it('Should be a function', () => {
            expect(typeof user.getAllUsers).toBe('function');
        });
        it('Should return a promise', () => {
            let userPromise = user.getAllUsers()
            expect(userPromise.then).toBeDefined();
            expect(userPromise.catch).toBeDefined();
        });
    });
});