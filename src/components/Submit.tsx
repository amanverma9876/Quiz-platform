import React from 'react';

interface SubmitProps {
  handleSubmit: () => void;
}

const Submit: React.FC<SubmitProps> = ({ handleSubmit }) => {
  return (
    <div className="mt-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={handleSubmit}
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default Submit;
