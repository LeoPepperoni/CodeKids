const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('QuestionController', function () {
    describe('createQuestion', function () {
        it('Should create a new question and return it', async function () {
            // Mock Question Model
            const newQuestionData = {
                question: 'What is 2+2?',
                answer: '4',
                module: 'Math',
                position: '1',
                hint: 'Basic arithmetic'
            };
            const QuestionMock = {
                findOne: sinon.stub().resolves(null),
                create: sinon.stub().resolves(newQuestionData)
            };

            // Proxyquire to inject mocks
            const questionController = proxyquire('../controllers/questionController', {
                '../models/questionModel': QuestionMock
            });

            // Mock req and res objects
            const req = { body: newQuestionData };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await questionController.createQuestion(req, res);

            // Assertions
            sinon.assert.calledOnce(QuestionMock.findOne);
            sinon.assert.calledOnce(QuestionMock.create);
            assert.deepStrictEqual(resJson, newQuestionData);
            assert.strictEqual(resStatus, 200);
        });

        it('Should return an error if a question with the same module and position exists', async function () {
            // Mock Question Model with an existing question
            const existingQuestionData = {
                question: 'Existing question',
                module: 'Math',
                position: '1'
            };
            const QuestionMock = {
                findOne: sinon.stub().resolves(existingQuestionData),
                create: sinon.stub().resolves() // Stub the create method
            };

            // Proxyquire to inject mocks
            const questionController = proxyquire('../controllers/questionController', {
                '../models/questionModel': QuestionMock
            });

            // Mock req and res objects
            const req = { body: { module: 'Math', position: '1' } };
            let resJson, resStatus;
            const res = {
                json: (json) => { resJson = json; },
                status: (status) => { resStatus = status; return res; }
            };

            // Call the function
            await questionController.createQuestion(req, res);

            // Assertions
            sinon.assert.calledOnce(QuestionMock.findOne);
            sinon.assert.notCalled(QuestionMock.create);
            assert.strictEqual(resJson.error, 'A question with the specified module and position already exists.');
            assert.strictEqual(resStatus, 400);
        });

        afterEach(function () {
            sinon.restore();
        });
    });

    // ... include other test cases for deleteQuestion, etc. ...
});
