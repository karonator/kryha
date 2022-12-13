import React, {
  ReactElement,
  useEffect,
  useState,
  useRef
} from 'react';

import { toast } from 'react-toastify';

import './App.css';

import { ITileField, IGame } from '../types';
import useWidth from '../hooks/useWidth';

import GameBar from '../components/GameBar';
import Tile from '../components/Tile';

import {
  genTiles,
  performMove,
  winCheck
} from '../controllers/game';

const App = (): ReactElement => {
  const [field, setField] = useState<ITileField>([]);
  const [gameData, setGameData] = useState<IGame>({
    size: 3,
    moves: 0,
    wins: 0,
    imageMode: true
  });
  const {
    size,
    moves,
    wins,
    imageMode
  } = gameData;

  const container = useRef<HTMLDivElement>(null);
  const containerWidth = useWidth(container);

  useEffect(() => {
    setField(genTiles(size));
  }, [size]);

  useEffect(() => {
    if (winCheck(field)) {
      toast('Congratilations! You\'ve completed the level!');
      setGameData({ ...gameData, moves: 0, wins: wins + 1 });
      setField(genTiles(size));
    }
  }, [field]);

  const move = (order: number): boolean => {
    const update = performMove(field, order, size);
    if (update) {
      setField(update);
      setGameData({ ...gameData, moves: moves + 1 });
      return true;
    }
    return false;
  };

  return (
    <>
      <GameBar gameData={gameData} setGameData={setGameData} />
      <div className="tiles" ref={container}>
        {field.map((tile) => (
          <Tile
            key={`tile.-${tile.index}`}
            tile={tile}
            fieldSize={size}
            move={move}
            containerWidth={containerWidth}
            imageMode={imageMode}
          />
        ))}
      </div>
    </>
  );
};

export default App;
