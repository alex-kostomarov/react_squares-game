/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { Modal } from './modal/Modal';

export const App = () => {
  const boardSize = 10;
  const [delay, setDelay] = useState(1000);
  const [isGameStart, setIsGameStart] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerClicked, setPlayerClicked] = useState(true);
  const [computerScore, setComputerScore] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [gameOverMsg, setGameOverMsg] = useState('');
  const [intermediateResult, setIntermediateResult] = useState(false);
  const [activeCellID, setActiveCellID] = useState(-1);

  const createBoard = (size) => {
    const cells = [];

    for (let i = 0; i < size * size; i += 1) {
      cells.push(<div className="App__cell"></div>);
    }

    return cells;
  };

  const [board, setBoard] = useState(createBoard(boardSize));

  const boardRefresh = () => {
    if (isGameStart) {
      if (playerScore > 9 || computerScore > 9) {
        playerScore > 9 ? setGameOverMsg("You win") : setGameOverMsg("You lose")
        setModalActive(true);
        setIsGameStart(false);

        return;
      }

      const cells = createBoard(boardSize);

      if (intermediateResult) {
        cells[activeCellID] = (
          <div className={playerClicked
            ? 'App__cell App__cell--clicked'
            : 'App__cell App__cell--unclicked'}
          >
          </div>
        );

        setIntermediateResult(false);
      } else {
        if (!playerClicked) {
          setComputerScore(computerScore + 1);
        }

        const activeCell = Math.floor(Math.random() * (boardSize * boardSize));

        setActiveCellID(activeCell);

        cells[activeCell] = <div className="App__cell App__cell--active" onClick={handlePlayerClick}></div>;

        setIntermediateResult(true);
      }

      setPlayerClicked(false);
      setBoard(cells);
    }
  };

  const startGame = () => {
    setIsGameStart(true);
  };

  const handlePlayerClick = () => {
    setPlayerScore(playerScore + 1);
    setPlayerClicked(true);
  };

  const setSpeed = (event) => {
    const newDelayValue = event.target.value;

    if (newDelayValue > 0) {
      setDelay(newDelayValue);
    }
  }

  useEffect(() => {
    const interval = playerClicked
      ? setInterval(boardRefresh, 0)
      : setInterval(boardRefresh, delay);

    return () => {
      clearInterval(interval);
    };
  }, [isGameStart, board, playerClicked]);

  return (
    <div className="App">
      <div className="App__board">
        {board.map(cell => cell)}
      </div>

      <form className="App__form" onSubmit={e => e.preventDefault()}>
        <span>Set speed in ms: </span>
        
        <input
          type="number"
          className="App__input"
          placeholder="Enter delay time in ms"
          value={delay === 0 ? '' : delay}
          onChange={event => setSpeed(event)}
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
        playerScore:&nbsp;
        {playerScore}

        <br />

        computerScore:&nbsp;
        {computerScore}
      </div>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        content={gameOverMsg}
        reset={boardRefresh}
      />
    </div>
  );
};
