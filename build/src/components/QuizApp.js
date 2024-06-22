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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const QuizForm_1 = __importDefault(require("./QuizForm"));
const Quiz_1 = __importDefault(require("./Quiz"));
const QuizResult_1 = __importDefault(require("./QuizResult"));
const QuizApp = () => {
    const [quizzes, setQuizzes] = (0, react_1.useState)(() => {
        const savedQuizzes = localStorage.getItem('quizzes');
        return savedQuizzes ? JSON.parse(savedQuizzes) : [];
    });
    const [currentQuiz, setCurrentQuiz] = (0, react_1.useState)(null);
    const [results, setResults] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('quizzes', JSON.stringify(quizzes));
    }, [quizzes]);
    const handleCreateQuiz = (quiz) => {
        setQuizzes([...quizzes, quiz]);
    };
    const handleStartQuiz = (index) => {
        setCurrentQuiz(index);
        setResults(null);
    };
    const handleSubmitQuiz = (result) => {
        setResults(result);
        setCurrentQuiz(null);
    };
    return (<div className="w-full max-w-2xl bg-white rounded shadow p-6">
      {currentQuiz === null ? (results ? (<QuizResult_1.default results={results}/>) : (<>
            <QuizForm_1.default onCreateQuiz={handleCreateQuiz}/>
            <div className="mt-4">
              {quizzes.map((quiz, index) => (<button key={index} onClick={() => handleStartQuiz(index)} className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-2">
                  Start Quiz {index + 1}
                </button>))}
            </div>
          </>)) : (<Quiz_1.default quiz={quizzes[currentQuiz]} onSubmitQuiz={handleSubmitQuiz}/>)}
    </div>);
};
exports.default = QuizApp;
//# sourceMappingURL=QuizApp.js.map