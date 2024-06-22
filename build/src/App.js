"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const QuizApp_1 = __importDefault(require("./components/QuizApp"));
const App = () => {
    return (<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <QuizApp_1.default />
    </div>);
};
exports.default = App;
//# sourceMappingURL=App.js.map