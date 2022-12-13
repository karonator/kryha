import React, { ReactElement } from 'react';

import './GameBar.scss';

import { GameBarProps } from './interfaces';

const GameBar = ({ gameData }:GameBarProps):ReactElement => {
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
          zz
        </div>
      </div>
    </div>
  );
};

export default GameBar;
