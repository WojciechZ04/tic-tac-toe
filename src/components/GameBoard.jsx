import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleChangeBoard(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			const updatedGameBoard = [...prevGameBoard.map((prevRow) => [...prevRow])];
			updatedGameBoard[rowIndex][colIndex] = "X";
			return updatedGameBoard;
		}
		)
	}
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
				<button onClick={() => handleChangeBoard(rowIndex, colIndex)}>{playerSymbol}</button>
			  </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
