const userController = require('../controllers/user');
const userService    = require('../services/user');
const sinon          = require('sinon');
const express        = require('express');
const request        = require('supertest');
const db             = require('../config/database');

let app = express().use(userController);

let getUsersStub = sinon.stub(userService, 'getUsers').callsFake(() => {
    return Promise.resolve([{
        id: '1',
        email: 'test@test.test',
        passwd: 'test'
    }]);
});

describe('User controller', () => {
    describe('Route /', () => {
        beforeAll(() => {
            this.dbSpy = sinon.spy(db, 'query');
            this.response = request(app).get('/');
        });
        afterAll(() => {
            getUsersStub.restore();
            this.dbSpy.restore();
        });
        it('Should respond with status code 200', () => {
            this.response.expect(200);
        });
        it('Should be json', () => {
            this.response.expect('Content-Type', 'application/json');
        });
        
        // Should be called last
        it('Should contain test user', (done) => {
            this.response.end((err, res) => {
                expect(res.body[0]).toEqual({
                    id: '1',
                    email: 'test@test.test',
                    passwd: 'test'
                });
                done();
            });
        });
        it('Should not have called the real database', () => {
            expect(this.dbSpy.callCount).toEqual(0);
        });
    });
});