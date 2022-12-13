import React, { ReactElement, CSSProperties } from 'react';

import './Tile.scss';
import bg from '../../assests/backgrounds/bg.jpg';

import { NumToXY } from '../../types';

import { TileProps } from './interfaces';

const Tile = (props: TileProps):ReactElement | null => {
  const {
    tile,
    fieldSize,
    move,
    containerWidth,
    imageMode
  } = props;
  const { order, empty, index } = tile;

  if (empty) {
    return null;
  }

  const tileStyle = (): CSSProperties => {
    const coords = NumToXY(order, fieldSize);
    const step = 100 / fieldSize;

    return {
      width: `${step}%`,
      left: `${coords.x * step}%`,
      top: `${coords.y * step}%`
    };
  };

  const backgroundStyles = (): CSSProperties | null => {
    const backgroundCoords = NumToXY(index, fieldSize);

    if (containerWidth && imageMode) {
      const bgStep = (1 / fieldSize) * containerWidth;
      return {
        backgroundImage: !empty ? `url(${bg})` : '',
        backgroundSize: containerWidth,
        backgroundPositionX: `-${backgroundCoords.x * bgStep}px`,
        backgroundPositionY: `-${backgroundCoords.y * bgStep}px`
      };
    }
    return null;
  };

  return (
    <div
      className="tile"
      style={{ ...tileStyle(), ...backgroundStyles() }}
      onClick={() => move(order)}
    >
      {!imageMode && index + 1}
    </div>
  );
};

export default Tile;
