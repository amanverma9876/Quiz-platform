// quizStorage.js
const quizStorage = {
    quizzes: [],
  
    addQuiz(quiz) {
      quizStorage.quizzes.push(quiz);
    },
  
    getQuiz(quizId) {
      return quizStorage.quizzes.find((quiz) => quiz.id === quizId);
    },
  };
  
  export default quizStorage;