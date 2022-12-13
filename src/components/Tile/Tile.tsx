import React, { ReactElement, CSSProperties } from 'react';

import './Tile.scss';
import bg from '../../assests/backgrounds/bg-1.jpg';

import { NumToXY } from '../../types';

import { TileProps } from './interfaces';

const Tile = (props: TileProps):ReactElement => {
  const {
    tile,
    size,
    move,
    containerWidth
  } = props;
  const { order, empty, index } = tile;

  const tileStyle = (): CSSProperties => {
    const coords = NumToXY(order, size);
    const step = 100 / size;

    return {
      width: `${step}%`,
      height: `${step}%`,
      left: `${coords.x * step}%`,
      top: `${coords.y * step}%`
    };
  };

  const backgroundStyles = (): CSSProperties | null => {
    const backgroundCoords = NumToXY(index, size);
    if (containerWidth) {
      return {
        backgroundImage: !empty ? `url(${bg})` : '',
        backgroundSize: containerWidth,
        backgroundPositionX: `-${(backgroundCoords.x / size) * containerWidth}px`,
        backgroundPositionY: `-${(backgroundCoords.y / size) * containerWidth}px`
      };
    }
    return null;
  };

  return (
    <div
      className={`tile ${empty && 'empty'}`}
      style={{ ...tileStyle(), ...backgroundStyles() }}
      onClick={() => move(order)}
    >
      {!empty && index + 1}
    </div>
  );
};

export default Tile;
