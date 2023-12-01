const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');
const jwt = require('jsonwebtoken');

describe('UserController', function () {
    describe('loginUser', function () {
        it('Should return the User and token if login is successful', async function () {
            // Mock User Model with a login method
            const fakeUser = { _id: '123', email: 'test@example.com' };
            const UserMock = {
                login: sinon.fake.resolves(fakeUser)
            };

            // Mock jsonwebtoken
            const jwtStub = sinon.stub(jwt, 'sign').returns('fake_token');

            // Proxyquire to inject mocks
            const userController = proxyquire('../controllers/userController', {
                '../models/userModel': UserMock,
                'jsonwebtoken': jwtStub
            });

            // Mock req and res objects
            const req = {
                body: { email: 'test@example.com', password: 'password123' }
            };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await userController.loginUser(req, res);

            // Assertions
            sinon.assert.calledOnce(UserMock.login);
            sinon.assert.calledWith(jwtStub, { _id: fakeUser._id });
            assert.strictEqual(resJson.email, fakeUser.email);
            assert.strictEqual(resJson.token, 'fake_token');
            assert.strictEqual(resStatus, 200);
        });

        afterEach(function () {
            sinon.restore();
        });
    });
});
