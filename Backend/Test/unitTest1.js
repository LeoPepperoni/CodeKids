const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');
const jwt = require('jsonwebtoken');

describe('UserController', function () {
    describe('signupUser', function () {
        it('Should return the User if a User is Created Successfully', async function () {
            // Mock User Model
            const fakeUser = { _id: '123', email: 'test@example.com' };
            const UserMock = {
                signup: sinon.fake.resolves(fakeUser)
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
                body: { firstName: 'John', lastName: 'Doe', email: 'test@example.com', password: 'password123' }
            };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await userController.signupUser(req, res);

            // Assertions
            sinon.assert.calledOnce(UserMock.signup);
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
