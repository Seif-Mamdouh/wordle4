"use client";
import Select from "./components/Select";
import Header from "./components/Header";

import { useState, useEffect, useMemo, useCallback } from "react";
import Row from "./components/Row";

import { randomWord } from "./words/lettersMap";
import RestartButton from "./components/RestartButton";
import RowList from './components/RowList';

type WordLength = 5 | 6 | 7 | 8;
const DEFAULT_WORD_LENGTH = 5;

export default function Home() {
  const [wordLength, setWordLength] = useState<WordLength>(DEFAULT_WORD_LENGTH);
  const maxNumOfGuesses = useMemo(() => wordLength + 1, [wordLength]);

  const initialWord = randomWord(wordLength);
  const [word, setWord] = useState<string>(initialWord);

  const [guesses, setGuesses] = useState<string[]>([""]);
  const [numOfGuesses, setNumOfGuesses] = useState(0);

  const handleSelectOnChange = (event: any) => {
    setWordLength(Number(event.target.value) as WordLength);
    setGuesses([""]);
    setNumOfGuesses(0);
  };

  const handleRestartGame = (event: any) => {
    setWord(randomWord(wordLength));
    setGuesses([""]);
    setNumOfGuesses(0);
  };

  useEffect(() => {
    setWord(randomWord(wordLength));
    console.log("Guess this: " + word);
  }, [wordLength]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      setGuesses((currentGuesses) => {
        const currentGuess = currentGuesses[numOfGuesses] || "";
        if (key === "Backspace") {
          const newGuess = currentGuess.slice(0, -1);
          return currentGuesses.map((guess, index) =>
            index === numOfGuesses ? newGuess : guess
          );
        } else if (key === "Enter") {
          if (currentGuess.length < wordLength) {
            alert("Word is too short!");
            return currentGuesses;
          } else {
            setNumOfGuesses(currentGuesses.length);
            return [...currentGuesses, ""];
          }
        } else if (/^[a-zA-Z]$/.test(key)) {
          if ((currentGuess + key).length > wordLength) {
            return currentGuesses;
          } else {
            const newGuess = currentGuess + key.toLowerCase();
            console.log({ newGuess });
            const currentGuessesCopy = [...currentGuesses];
            currentGuessesCopy[numOfGuesses] = newGuess;
            return currentGuessesCopy;
          }
        } else {
          return currentGuesses;
        }
      });
    },
    [wordLength, numOfGuesses]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [handleKeyDown]);

  console.log({ guesses, numOfGuesses, word, maxNumOfGuesses });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <p>Word Length:</p>
        <Select
          style={{ color: "black", marginLeft: "5px" }}
          options={[5, 6, 7, 8]}
          value={wordLength}
          onChange={handleSelectOnChange}
        />
      </div>
      <RowList
        activeRow={numOfGuesses}
        word={word}
        maxNumOfGuesses={maxNumOfGuesses}
        guesses={guesses}
        backgroundColor={""}
        numberOfGuesses={0}
      />
      <RestartButton onClick={handleRestartGame} />
      {numOfGuesses === maxNumOfGuesses && (<p> The Word is: {word} </p>)}
    </div>
  );
}
