import React from "react";

// The guessed word letters displayed
const Alphabet = ({ letters, selectLetter }) => {
  return (
    <div className="alphabet">
      {letters.map((letter, index) => (
        <button key={index} onClick={() => selectLetter(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
