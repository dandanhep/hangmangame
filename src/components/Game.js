import React, { useState } from "react";
import Header from "./Header";
import WordDisplay from "./WordDisplay";
import Alphabet from "./Alphabet";
import Hangman from "./Hangman";
import wordList from "../data/wordList";

const Game = () => {
  const [targetWord, setTargetWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setTargetWord(wordList[randomIndex]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  const selectLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!targetWord.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  const restartGame = () => {
    startGame();
  };

  const isWin = () => {
    return targetWord
      .split("")
      .every((letter) => guessedLetters.includes(letter));
  };

  const isLoss = () => {
    return incorrectGuesses >= 10;
  };

  return (
    <div className="game">
      <Header restartGame={restartGame} />
      <Hangman incorrectGuesses={incorrectGuesses} />
      <WordDisplay word={targetWord} guessedLetters={guessedLetters} />
      <Alphabet
        letters={[
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ]}
        selectLetter={selectLetter}
      />
      {isWin() && <p>You won!</p>}
      {isLoss() && <p>You lost!</p>}
    </div>
  );
};

export default Game;
