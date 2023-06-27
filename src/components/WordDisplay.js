import React from "react";

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter.toUpperCase()) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
