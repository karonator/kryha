import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';

import './App.css';

import GameBar from '../components/GameBar/GameBar';
import Tile from '../components/Tile';

import { NumToXY } from '../utils/coords';
import { ITile } from '../types';

type ITileField = Array<ITile>;

const App = (): ReactElement => {
  const [field, setField] = useState<ITileField>([]);
  const [fieldSize, setFieldSize] = useState<number>(10);

  const genTiles = (size: number): ITileField => {
    const orders = Array.from(Array(size * size).keys())
      .map((order) => ({ order, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ order }) => order);

    const tiles = orders.map((order, index) => ({
      index,
      order,
      empty: false
    }));

    tiles[Math.floor(Math.random() * tiles.length)].empty = true;

    return tiles;
  };

  const move = (order: number): boolean => {
    const { x, y } = NumToXY(order, fieldSize);
    const empty = field.find((tile) => tile.empty);
    if (empty) {
      const emptyCoords = NumToXY(empty.order, fieldSize);
      if (
        (((x + 1 === emptyCoords.x) || (x - 1 === emptyCoords.x)) && y === emptyCoords.y)
        || (((y + 1 === emptyCoords.y) || (y - 1 === emptyCoords.y)) && x === emptyCoords.x)
      ) {
        const updatedTiles = field.map((tile) => {
          switch (tile.order) {
            case empty.order:
              return {
                ...tile,
                order
              };
            case order:
              return {
                ...tile,
                order: empty.order
              };
            default:
              return tile;
          }
        });
        setField(updatedTiles);
        console.log('yes!');
      }
    }
    return false;
  };

  useEffect(() => {
    setField(genTiles(fieldSize));
  }, []);

  return (
    <div className="App">
      <GameBar />
      <div className="tiles">
        {field.map((tile) => (
          <Tile
            key={`tile.-${tile.index}`}
            tile={tile}
            size={fieldSize}
            move={move}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
