import React, { ReactElement } from 'react';

import './GameBar.scss';

import mode_icon from '../../assests/icons/mode.svg';
import chevron_up from '../../assests/icons/chevron_up.svg';
import chevron_down from '../../assests/icons/chevron_down.svg';

import { GameBarProps } from './interfaces';

const GameBar = ({ gameData, setGameData }:GameBarProps):ReactElement => {
  const { moves, wins } = gameData;

  return (
    <div className="gamebar">
      <h1>
        Puzzle
      </h1>
      <div className="actions">
        <div>
          <h3>
            Moves: { moves }
          </h3>
          <h3>
            Wins: { wins }
          </h3>
        </div>
        <div className="controls">
          <button
            type="button"
            title="Change mode"
            onClick={() => setGameData({ ...gameData, imageMode: !gameData.imageMode })}
          >
            <img src={mode_icon} alt="Change mode" />
          </button>
          <button
            type="button"
            title="Increase size"
            disabled={gameData.size === 5}
            onClick={() => setGameData({ ...gameData, size: gameData.size + 1, moves: 0 })}
          >
            <img src={chevron_up} alt="Change mode" />
          </button>
          <button
            type="button"
            title="Decrease size"
            disabled={gameData.size === 2}
            onClick={() => setGameData({ ...gameData, size: gameData.size - 1, moves: 0 })}
          >
            <img src={chevron_down} alt="Change mode" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameBar;
