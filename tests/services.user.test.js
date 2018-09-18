const user = require('../services/user');
const userModel = require('../models/user');
const sinon     = require('sinon');

describe('User service', () => {
    describe('getUsers method', () => {
        it('Should be defined', () => {
            expect(user.getUsers).toBeDefined();
        });
        it('Should be a function', () => {
            expect(typeof user.getUsers).toBe('function');
        });
        it('Should return a promise', () => {
            let userPromise = user.getUsers()
            expect(userPromise.then).toBeDefined();
            expect(userPromise.catch).toBeDefined();
        });
        it('Should resolve with an array', async (done) => {
            let stubUsers = sinon.stub(userModel, 'getAllUsers').callsFake(() => {
                return Promise.resolve([]);
            });
            const users = await user.getUsers();
            expect(Array.isArray(users)).toBe(true);
            stubUsers.restore();
            done();
        });
        it('Should reject with an error', async (done) => {
            let stubUsers = sinon.stub(userModel, 'getAllUsers').callsFake(() => {
                return Promise.reject(new Error('Some error'));
            });
            try {
                const users = await user.getUsers();
            } catch (err) {
                expect(err).toEqual(Error('Some error'));
            }
            stubUsers.restore();
            done();
        })
    });
});