import React, { useState } from 'react';
import Question from './Question';

const QuizCreator: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleAddQuestion = () => {
    setQuestions((prev) => [...prev, currentQuestion]);
    setCurrentQuestion('');
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Create Quiz</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter a question"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
      </div>
      <div>
        {questions.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QuizCreator;
