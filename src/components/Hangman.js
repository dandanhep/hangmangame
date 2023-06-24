import React from "react";
import hangman_0 from "./hangmandrawings/state1.GIF";
import hangman_1 from "./hangmandrawings/state2.GIF";
import hangman_2 from "./hangmandrawings/state3.GIF";
import hangman_3 from "./hangmandrawings/state4.GIF";
import hangman_4 from "./hangmandrawings/state5.GIF";
import hangman_5 from "./hangmandrawings/state6.GIF";
import hangman_6 from "./hangmandrawings/state7.GIF";
import hangman_7 from "./hangmandrawings/state8.GIF";
import hangman_8 from "./hangmandrawings/state9.GIF";
import hangman_9 from "./hangmandrawings/state10.gif";
import hangman_10 from "./hangmandrawings/state11.GIF";

// Images displayed when wrong guess is made
const Hangman = ({ incorrectGuesses }) => {
  const hangmanImages = [
    hangman_0,
    hangman_1,
    hangman_2,
    hangman_3,
    hangman_4,
    hangman_5,
    hangman_6,
    hangman_7,
    hangman_8,
    hangman_9,
    hangman_10,
  ];

  return (
    <div className="hangman">
      <img src={hangmanImages[incorrectGuesses]} alt="Hangman" />
    </div>
  );
};

export default Hangman;
