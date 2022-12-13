import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';

import './App.css';

import GameBar from '../components/GameBar/GameBar';
import Tile from '../components/Tile';

import { ITileField, NumToXY, IGame } from '../types';

import {
  genTiles,
  performMove
} from '../controllers/game';

const App = (): ReactElement => {
  const [field, setField] = useState<ITileField>([]);
  const [gameData, setGameData] = useState<IGame>({
    size: 3,
    moves: 0,
    wins: 0
  });

  const { size } = gameData;

  useEffect(() => {
    setField(genTiles(size));
  }, []);

  const move = (order: number): boolean => {
    const update = performMove(field, order, size);
    if (update) {
      setField(update);
      setGameData({ ...gameData, moves: gameData.moves + 1 });
      return true;
    }
    return false;
  };

  return (
    <>
      <GameBar gameData={gameData} />
      <div className="tiles">
        {field.map((tile) => (
          <Tile
            key={`tile.-${tile.index}`}
            tile={tile}
            size={size}
            move={move}
          />
        ))}
      </div>
    </>
  );
};

export default App;
