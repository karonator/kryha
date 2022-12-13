import React, { ReactElement, CSSProperties } from 'react';

import './Tile.css';
import bg from '../../assests/backgrounds/bg-1.jpg';

import { NumToXY } from '../../types';

import { TileProps } from './interfaces';

const Tile = ({ tile, size, move }:TileProps):ReactElement => {
  const { order, empty, index } = tile;

  const coords = NumToXY(order, size);
  const backgroundCoords = NumToXY(index, size);
  const step = 100 / size;

  const tileStyle: CSSProperties = {
    width: `${step}%`,
    height: `${step}%`,
    left: `${coords.x * step}%`,
    top: `${coords.y * step}%`,

    backgroundImage: !empty ? `url(${bg})` : '',
    backgroundSize: 500,
    backgroundPositionX: `-${(backgroundCoords.x / size) * 500}px`,
    backgroundPositionY: `-${(backgroundCoords.y / size) * 500}px`
  };

  return (
    <div
      className={`tile ${empty && 'tile-empty'}`}
      style={tileStyle}
      onClick={() => move(order)}
    >
      {!empty && index}
    </div>
  );
};

export default Tile;
