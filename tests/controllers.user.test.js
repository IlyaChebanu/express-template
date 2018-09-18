const userController = require('../controllers/user');
const userService    = require('../services/user');
const sinon          = require('sinon');
const express        = require('express');
const request        = require('supertest');

app = express().use(userController);

describe('User controller', () => {
    describe('Route /', () => {
        beforeAll(() => {
            this.getUsersStub = sinon.stub(userService, 'getUsers').callsFake(() => {
                return Promise.resolve([{
                    id: '1',
                    email: 'test@test.test',
                    passwd: 'test'
                }]);
            });
            this.response = request(app).get('/');
        });
        afterAll(() => {
            this.getUsersStub.restore();
        });
        it('Should respond with status code 200', () => {
            this.response.expect(200);
        });
        it('Should be json', () => {
            this.response.expect('Content-Type', 'application/json');
        });
        
        // Should be called last
        it('Should contain test user', (done) => {
            this.response.end(function(err, res) {
                expect(res.body[0]).toEqual({
                    id: '1',
                    email: 'test@test.test',
                    passwd: 'test'
                });
                done();
            });
        })
    });
});