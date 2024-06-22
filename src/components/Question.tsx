import React, { useState } from 'react';

interface QuestionProps {
  question: string;
  index: number;
  handleAnswer: (questionIndex: number, answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  index,
  handleAnswer,
}) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="mb-4">
      <p className="font-medium">{question}</p>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder="Enter your answer"
        value={answer}
        onChange={handleInputChange}
      />
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={() => handleAnswer(index, answer)}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default Question;
