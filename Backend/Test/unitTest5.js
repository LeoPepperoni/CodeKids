const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('QuestionController', function () {
    describe('getQuestion', function () {
        it('Should return the question when it is found', async function () {
            // Mock Question Model
            const fakeQuestion = { _id: '123', question: 'What is 2+2?', answer: '4' };
            const QuestionMock = {
                findById: sinon.stub().resolves(fakeQuestion)
            };

            // Proxyquire to inject mocks
            const questionController = proxyquire('../controllers/questionController', {
                '../models/questionModel': QuestionMock
            });

            // Mock req and res objects
            const req = { params: { id: '123' } };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await questionController.getQuestion(req, res);

            // Assertions
            sinon.assert.calledOnceWithExactly(QuestionMock.findById, '123');
            assert.deepStrictEqual(resJson, fakeQuestion);
            assert.strictEqual(resStatus, 200);
        });

        it('Should return a 404 status if the question is not found', async function () {
            // Mock Question Model
            const QuestionMock = {
                findById: sinon.stub().resolves(null)
            };

            // Proxyquire to inject mocks
            const questionController = proxyquire('../controllers/questionController', {
                '../models/questionModel': QuestionMock
            });

            // Mock req and res objects
            const req = { params: { id: 'nonexistent' } };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await questionController.getQuestion(req, res);

            // Assertions
            sinon.assert.calledOnceWithExactly(QuestionMock.findById, 'nonexistent');
            assert.strictEqual(resJson.message, 'Question not found');
            assert.strictEqual(resStatus, 404);
        });

        afterEach(function () {
            sinon.restore();
        });
    });

    // ... include other test cases ...
});
