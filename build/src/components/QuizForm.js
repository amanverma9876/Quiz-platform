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
const QuizForm = ({ onCreateQuiz }) => {
    const [title, setTitle] = (0, react_1.useState)('');
    const [questions, setQuestions] = (0, react_1.useState)([]);
    const [currentQuestion, setCurrentQuestion] = (0, react_1.useState)('');
    const [options, setOptions] = (0, react_1.useState)(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = (0, react_1.useState)(null);
    const handleAddQuestion = () => {
        const newQuestion = {
            question: currentQuestion,
            options: options,
            correctAnswer: correctAnswer,
        };
        setQuestions([...questions, newQuestion]);
        setCurrentQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const quiz = { title, questions };
        onCreateQuiz(quiz);
        setTitle('');
        setQuestions([]);
    };
    return (<form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-bold mb-4">Create Quiz</h2>
      <div className="mb-4">
        <label className="block mb-2">Quiz Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Question</label>
        <input type="text" value={currentQuestion} onChange={(e) => setCurrentQuestion(e.target.value)} className="w-full p-2 border rounded"/>
      </div>
      <div className="mb-4">
        {options.map((option, index) => (<div key={index} className="mb-2">
            <label className="block mb-1">Option {index + 1}</label>
            <input type="text" value={option} onChange={(e) => setOptions([
                ...options.slice(0, index),
                e.target.value,
                ...options.slice(index + 1),
            ])} className="w-full p-2 border rounded"/>
          </div>))}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Correct Answer</label>
        <select value={correctAnswer !== null && correctAnswer !== void 0 ? correctAnswer : ''} onChange={(e) => setCorrectAnswer(Number(e.target.value))} className="w-full p-2 border rounded">
          <option value="" disabled>Select the correct answer</option>
          {options.map((option, index) => (<option key={index} value={index}>{option}</option>))}
        </select>
      </div>
      <button type="button" onClick={handleAddQuestion} className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Question
      </button>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded ml-2">
        Create Quiz
      </button>
    </form>);
};
exports.default = QuizForm;
//# sourceMappingURL=QuizForm.js.map