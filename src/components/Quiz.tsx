import React, { useState } from 'react';

interface QuizProps {
  quiz: any;
  onSubmitQuiz: (result: any) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onSubmitQuiz }) => {
  const [answers, setAnswers] = useState<number[]>(Array(quiz.questions.length).fill(null));

  const handleAnswerChange = (questionIndex: number, optionIndex: number) => {
    setAnswers([
      ...answers.slice(0, questionIndex),
      optionIndex,
      ...answers.slice(questionIndex + 1),
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswers = quiz.questions.map((q: any) => q.correctAnswer);
    const score = answers.reduce((acc, answer, index) => acc + (answer === correctAnswers[index] ? 1 : 0), 0);
    onSubmitQuiz({ score, correctAnswers, userAnswers: answers });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
      {quiz.questions.map((question: any, questionIndex: number) => (
        <div key={questionIndex} className="mb-4">
          <h3 className="text-lg font-semibold">{question.question}</h3>
          {question.options.map((option: string, optionIndex: number) => (
            <div key={optionIndex} className="mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={optionIndex}
                  checked={answers[questionIndex] === optionIndex}
                  onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                  className="mr-2"
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Submit Quiz
      </button>
    </form>
  );
};

export default Quiz;
