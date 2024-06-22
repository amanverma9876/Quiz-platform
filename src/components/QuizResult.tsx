import React from 'react';

interface QuizResultProps {
  results: any;
}

const QuizResult: React.FC<QuizResultProps> = ({ results }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
      <p className="mb-2">Your score: {results.score}</p>
      <h3 className="text-lg font-semibold mb-2">Review Answers:</h3>
      {results.userAnswers.map((answer: number, index: number) => (
        <div key={index} className="mb-4">
          <p className="mb-1">Question {index + 1}</p>
          <p className={`p-2 rounded ${answer === results.correctAnswers[index] ? 'bg-green-200' : 'bg-red-200'}`}>
            Your answer: {answer !== null ? results.quiz.questions[index].options[answer] : 'No answer'}
          </p>
          {answer !== results.correctAnswers[index] && (
            <p className="p-2 bg-blue-200 rounded">
              Correct answer: {results.quiz.questions[index].options[results.correctAnswers[index]]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizResult;
