/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.scss';

export const App = () => {
  const boardSize = 10;
  const [delay, setDelay] = useState(0);
  const [isGameStart, setIsGameStart] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerClicked, setPlayerClicked] = useState(false);
  const [computerScore, setComputerScore] = useState(-1);

  const createBoard = (size: number) => {
    const cells = [];

    for (let i = 0; i < size * size; i += 1) {
      cells.push(<div className="App__cell"></div>);
    }

    return cells;
  };

  const [board, setBoard] = useState(createBoard(boardSize));

  const boardRefresh = () => {
    if (isGameStart) {
      if (!playerClicked) {
        setComputerScore(computerScore + 1);
      }

      setPlayerClicked(false);

      const cells = createBoard(boardSize);
      const activeCell = Math.floor(Math.random() * (boardSize * boardSize));

      cells[activeCell] = <label onClick={handlePlayerClick}><div className="App__cell--active"></div></label>;
      setBoard(cells);
    }
  };

  const startGame = () => {
    setIsGameStart(true);
  };

  const handlePlayerClick = () => {
    setPlayerScore(playerScore + 1);
    setPlayerClicked(true);
  }

  useEffect(() => {
    const interval = setInterval(boardRefresh, delay);

    return () => {
      clearInterval(interval);
    };
  }, [isGameStart, board, playerClicked, playerScore]);

  return (
    <div className="App">
      <div className="App__board">
        {board.map(cell => cell)}
      </div>

      <form className="App__input" onSubmit={e => e.preventDefault()}>
        <input
          type="number"
          className="App__input"
          placeholder="Enter delay time in ms"
          value={delay}
          onChange={e => setDelay(Number(e.target.value))}
        />

        <button
          type="submit"
          className="App__button"
          onClick={startGame}
        >
          Start
        </button>
      </form>

      <div className="App__scoreList">
        playerScore:
        {playerScore}

        computerScore:
        {computerScore}
      </div>
    </div>
  );
};
