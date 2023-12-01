const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('ProgressController', function () {
    describe('completeModule', function () {
        it('Should create new progress if it does not exist', async function () {
            const progressData = { userID: 'user123', module: 'module1', completed: true };
            const ProgressMock = {
                findOne: sinon.stub().resolves(null),
                create: sinon.stub().resolves(progressData)
            };

            const progressController = proxyquire('../controllers/progressController', {
                '../models/progressModel': ProgressMock
            });

            const req = { body: { userID: 'user123', module: 'module1' } };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            await progressController.completeModule(req, res);

            sinon.assert.calledOnce(ProgressMock.findOne);
            sinon.assert.calledOnce(ProgressMock.create);
            assert.deepStrictEqual(resJson, progressData);
            assert.strictEqual(resStatus, 200);
        });

        it('Should update progress if it exists but not completed', async function () {
            const existingProgressData = { userID: 'user123', module: 'module1', completed: false, save: sinon.stub() };
            const ProgressMock = {
                findOne: sinon.stub().resolves(existingProgressData)
            };

            const progressController = proxyquire('../controllers/progressController', {
                '../models/progressModel': ProgressMock
            });

            const req = { body: { userID: 'user123', module: 'module1' } };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            await progressController.completeModule(req, res);

            sinon.assert.calledOnce(ProgressMock.findOne);
            sinon.assert.calledOnce(existingProgressData.save);
            assert(existingProgressData.completed);
            assert.deepStrictEqual(resJson, existingProgressData);
            assert.strictEqual(resStatus, 200);
        });

        afterEach(function () {
            sinon.restore();
        });
    });

    // ... include other test cases ...
});
