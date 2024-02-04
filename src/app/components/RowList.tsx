import React from "react";
import Row from "./Row";

interface Props {
  maxNumOfGuesses: number;
  word: string;
  guesses: string[];
  numberOfGuesses: number;
  activeRow: number;
  backgroundColor: string;
}

export default function RowList(props: Props) {
  const rows = Array(props.maxNumOfGuesses).fill(0);

  return rows.map((_, index) => {
    const guess = props.guesses[index] || "";
    return (
      <Row
        key={index}
        word={props.word}
        guess={guess}
        backgroundColor={props.backgroundColor}
        isActiveRow={index === props.activeRow}
      />
    );
  });
}
