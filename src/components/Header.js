import React from "react";

// Header text with restart game button
const Header = ({ restartGame }) => {
  return (
    <div className="header">
      <h1>Hangman Game</h1>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default Header;
