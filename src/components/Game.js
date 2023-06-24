import React, { useState } from "react";
import Header from "./Header";
import WordDisplay from "./WordDisplay";
import Alphabet from "./Alphabet";
import Hangman from "./Hangman";
import wordList from "../data/wordList"; // Importing the wordList data

const Game = () => {
  const [targetWord, setTargetWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length); // Generating a random index
    setTargetWord(wordList[randomIndex]); // Setting the target word
    setGuessedLetters([]); // Resetting the guessed letters
    setIncorrectGuesses(0); // Resetting the incorrect guesses
  };

  const selectLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]); // Adding the selected letter to the guessed letters
      if (!targetWord.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1); // Incrementing incorrect guesses if the selected letter is not in the target word
      }
    }
  };

  const restartGame = () => {
    startGame(); // Restarting the game by calling startGame function
  };

  const isWin = () => {
    return targetWord
      .split("")
      .every((letter) => guessedLetters.includes(letter)); // Checking if all letters in the target word have been guessed
  };

  const isLoss = () => {
    return incorrectGuesses >= 10; // Checking if the number of incorrect guesses exceeds the limit
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
