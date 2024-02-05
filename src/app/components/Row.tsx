import React from "react";

interface Props {
  word: string;
  guess: string;
  backgroundColor: string;
  isActiveRow: boolean;
}

const Row = (props: Props) => {
  return (
    <div style={{ display: "flex" }}>
      {Array.from(props.word).map((wordLetter, index) => {
        const currentGuess = props.guess;
        const guessedLetter = currentGuess[index] ?? "";

        const generatedColor = () => {
          if (!currentGuess || props.isActiveRow) return "black";

          if (guessedLetter === wordLetter) {
            return "green";
          } else if (props.word.includes(guessedLetter)) {
            return "#FFDB58";
          } else {
            return "gray";
          }
        };

        return (
          <div
            style={{
              margin: "5px",
              height: "45px",
              width: "45px",
              borderColor: "gray",
              borderWidth: "1px",
              backgroundColor: generatedColor(),
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            {props.guess[index] || " "}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
