import React, { useState } from 'react';

interface QuizFormProps {
  onCreateQuiz: (quiz: any) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ onCreateQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const quiz = { title, questions };
    onCreateQuiz(quiz);
    setTitle('');
    setQuestions([]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-bold mb-4">Create Quiz</h2>
      <div className="mb-4">
        <label className="block mb-2">Quiz Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Question</label>
        <input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="block mb-1">Option {index + 1}</label>
            <input
              type="text"
              value={option}
              onChange={(e) =>
                setOptions([
                  ...options.slice(0, index),
                  e.target.value,
                  ...options.slice(index + 1),
                ])
              }
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Correct Answer</label>
        <select
          value={correctAnswer ?? ''}
          onChange={(e) => setCorrectAnswer(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>Select the correct answer</option>
          {options.map((option, index) => (
            <option key={index} value={index}>{option}</option>
          ))}
        </select>
      </div>
      <button
        type="button"
        onClick={handleAddQuestion}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Question
      </button>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded ml-2"
      >
        Create Quiz
      </button>
    </form>
  );
};

export default QuizForm;
