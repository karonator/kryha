import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import GameBar from '.';
import { IGame } from '../../types';

describe('Render <GameBar />', () => {
  const gameDataMock: IGame = {
    size: 3,
    moves: 15,
    wins: 5,
    imageMode: true
  };

  test('GameBar: simple render', () => {
    render(
      <GameBar gameData={gameDataMock} setGameData={() => {}} />
    );

    const { moves, wins } = gameDataMock;

    expect(screen.queryByText(`Moves: ${moves}`)).toBeInTheDocument();
    expect(screen.queryByText(`Wins: ${wins}`)).toBeInTheDocument();

    expect(screen.queryByTitle('Change mode')).toBeInTheDocument();
    expect(screen.queryByTitle('Increase size')).toBeInTheDocument();
    expect(screen.queryByTitle('Decrease size')).toBeInTheDocument();
  });

  test('GameBar: mode button', () => {
    const modeClickFn = jest.fn();
    render(
      <GameBar gameData={gameDataMock} setGameData={modeClickFn} />
    );
    fireEvent.click(screen.getByTitle('Change mode'));
    expect(modeClickFn).toHaveBeenCalledWith({
      ...gameDataMock,
      imageMode: !gameDataMock.imageMode
    });
  });

  test('GameBar: increase button', () => {
    const modeClickFn = jest.fn();
    render(
      <GameBar gameData={gameDataMock} setGameData={modeClickFn} />
    );
    fireEvent.click(screen.getByTitle('Increase size'));
    expect(modeClickFn).toHaveBeenCalledWith({
      ...gameDataMock,
      size: gameDataMock.size + 1,
      moves: 0
    });
  });

  test('GameBar: decrease button', () => {
    const modeClickFn = jest.fn();
    render(
      <GameBar gameData={gameDataMock} setGameData={modeClickFn} />
    );
    fireEvent.click(screen.getByTitle('Decrease size'));
    expect(modeClickFn).toHaveBeenCalledWith({
      ...gameDataMock,
      size: gameDataMock.size - 1,
      moves: 0
    });
  });
});
