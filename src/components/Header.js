import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const readmeContent = `
# Hangman Game Rules

This is a simple Hangman game where you need to guess the hidden word by selecting letters. You have a limited number of incorrect guesses before the game is over. Good luck!

## How to Play

1. Click on the letters to guess them.
2. If the letter is present in the hidden word, it will be revealed.
3. If the letter is not present, the Hangman will start to appear.
4. Keep guessing until you reveal the entire word or run out of incorrect guesses.
5. Click the Restart button to start a new game.

Have fun playing!
`;

const Header = ({ restartGame, showHelp }) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleHelpClick = () => {
    setIsHelpOpen(true);
  };

  const handleCloseClick = () => {
    setIsHelpOpen(false);
  };

  return (
    <div className="header">
      <h1>Hangman Game</h1>
      <button onClick={restartGame}>Restart</button>
      <button onClick={handleHelpClick}>Help</button>
      {isHelpOpen && (
        <div className="help-modal">
          <div className="help-content">
            <button className="close-button" onClick={handleCloseClick}>
              Close
            </button>
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
