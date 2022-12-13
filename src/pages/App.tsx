import React, {
  ReactElement,
  useEffect,
  useState,
  useRef
} from 'react';

import './App.css';

import { ITileField, IGame } from '../types';
import useWidth from '../hooks/useWidth';

import GameBar from '../components/GameBar';
import Tile from '../components/Tile';

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

  const container = useRef<HTMLDivElement>(null);
  const containerWidth = useWidth(container);

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
      <div className="tiles" ref={container}>
        {field.map((tile) => (
          <Tile
            key={`tile.-${tile.index}`}
            tile={tile}
            size={size}
            move={move}
            containerWidth={containerWidth}
          />
        ))}
      </div>
    </>
  );
};

export default App;
