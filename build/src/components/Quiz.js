"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Quiz = ({ quiz, onSubmitQuiz }) => {
    const [answers, setAnswers] = (0, react_1.useState)(Array(quiz.questions.length).fill(null));
    const handleAnswerChange = (questionIndex, optionIndex) => {
        setAnswers([
            ...answers.slice(0, questionIndex),
            optionIndex,
            ...answers.slice(questionIndex + 1),
        ]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswers = quiz.questions.map((q) => q.correctAnswer);
        const score = answers.reduce((acc, answer, index) => acc + (answer === correctAnswers[index] ? 1 : 0), 0);
        onSubmitQuiz({ score, correctAnswers, userAnswers: answers });
    };
    return (<form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
      {quiz.questions.map((question, questionIndex) => (<div key={questionIndex} className="mb-4">
          <h3 className="text-lg font-semibold">{question.question}</h3>
          {question.options.map((option, optionIndex) => (<div key={optionIndex} className="mb-2">
              <label className="flex items-center">
                <input type="radio" name={`question-${questionIndex}`} value={optionIndex} checked={answers[questionIndex] === optionIndex} onChange={() => handleAnswerChange(questionIndex, optionIndex)} className="mr-2"/>
                {option}
              </label>
            </div>))}
        </div>))}
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
        Submit Quiz
      </button>
    </form>);
};
exports.default = Quiz;
//# sourceMappingURL=Quiz.js.map