import React, { ReactElement, CSSProperties } from 'react';

import './Tile.css';

import { NumToXY } from '../../utils/coords';

import { TileProps } from './interfaces';

const Tile = ({ tile, size, move } :TileProps):ReactElement => {
  const { order, empty, index } = tile;

  const coords = NumToXY(order, size);
  const step = 100 / size;

  const tileStyle: CSSProperties = {
    width: `${step}%`,
    height: `${step}%`,
    left: `${coords.x * step}%`,
    top: `${coords.y * step}%`
  };

  return (
    <div
      className="tile"
      style={tileStyle}
      onClick={() => move(order)}
    >
      {!empty && index}
    </div>
  );
};

export default Tile;
