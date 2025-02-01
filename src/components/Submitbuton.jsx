// src/components/SubmitButton.js
import React from 'react';

const SubmitButton = ({ disabled, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="submit-button"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
