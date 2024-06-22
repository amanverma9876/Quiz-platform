import React, { useEffect, useState } from 'react';
import QuizForm from './QuizForm';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import QuizCreator from './QuizCreator';
import QuizTaker from './QuizTaker';

const QuizApp: React.FC = () => {
  const [quizzes, setQuizzes] = useState<any[]>(() => {
    const savedQuizzes = localStorage.getItem('quizzes');
    return savedQuizzes ? JSON.parse(savedQuizzes) : [];
  });
  const [currentQuiz, setCurrentQuiz] = useState<number | null>(null);
  const [results, setResults] = useState<any | null>(null);

  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
  }, [quizzes]);

  const handleCreateQuiz = (quiz: any) => {
    setQuizzes([...quizzes, quiz]);
  };

  const handleStartQuiz = (index: number) => {
    setCurrentQuiz(index);
    setResults(null);
  };

  const handleSubmitQuiz = (result: any) => {
    setResults(result);
    setCurrentQuiz(null);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded shadow p-6">
      {currentQuiz === null ? (
        results ? (
          <QuizResult results={results} />
        ) : (
          <>
            <QuizForm onCreateQuiz={handleCreateQuiz} />
            <div className="mt-4">
              {quizzes.map((quiz, index) => (
                <button
                  key={index}
                  onClick={() => handleStartQuiz(index)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-2"
                >
                  Start Quiz {index + 1}
                </button>
              ))}
            </div>
          </>
        )
      ) : (
        <Quiz
          quiz={quizzes[currentQuiz]}
          onSubmitQuiz={handleSubmitQuiz}
        />
      )}
    </div>
    
  );
};

export default QuizApp;
