const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('QuestionController', function () {
    describe('deleteQuestion', function () {
        it('Should delete the question and return the deleted question if it exists', async function () {
            // Mock Question Model
            const fakeQuestion = { position: '1', module: 'module1', _id: '123', question: 'Sample Question?' };
            const QuestionMock = {
                findOneAndRemove: sinon.fake.resolves(fakeQuestion)
            };

            // Proxyquire to inject mocks
            const questionController = proxyquire('../controllers/questionController', {
                '../models/questionModel': QuestionMock
            });

            // Mock req and res objects
            const req = {
                body: { position: '1', module: 'module1' }
            };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await questionController.deleteQuestion(req, res);

            // Assertions
            sinon.assert.calledOnce(QuestionMock.findOneAndRemove);
            sinon.assert.calledWith(QuestionMock.findOneAndRemove, { position: '1', module: 'module1' });
            assert.strictEqual(resJson.deletedQuestion, fakeQuestion);
            assert.strictEqual(resStatus, 200);
        });

        it('Should return 404 if the question does not exist', async function () {
            // Mock Question Model
            const QuestionMock = {
                findOneAndRemove: sinon.fake.resolves(null)
            };

            // Proxyquire to inject mocks
            const questionController = proxyquire('../controllers/questionController', {
                '../models/questionModel': QuestionMock
            });

            // Mock req and res objects
            const req = {
                body: { position: '1', module: 'module1' }
            };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await questionController.deleteQuestion(req, res);

            // Assertions
            sinon.assert.calledOnce(QuestionMock.findOneAndRemove);
            sinon.assert.calledWith(QuestionMock.findOneAndRemove, { position: '1', module: 'module1' });
            assert.strictEqual(resJson.message, 'Question not found');
            assert.strictEqual(resStatus, 404);
        });

        afterEach(function () {
            sinon.restore();
        });
    });
});