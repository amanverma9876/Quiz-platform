import React, { useState } from 'react';
import Question from './Question';
import Submit from './Submit';

const QuizTaker: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Take Quiz</h2>
      <div>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            index={index}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
      <Submit handleSubmit={handleSubmit} />
    </div>
  );
};

export default QuizTaker;
