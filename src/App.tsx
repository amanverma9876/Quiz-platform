import React from 'react';
import QuizApp from './components/QuizApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <QuizApp />
    </div>
  );
};

export default App;
