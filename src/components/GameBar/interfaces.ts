import { IGame } from '../../types';

export interface GameBarProps {
  gameData: IGame;
  setGameData: React.Dispatch<React.SetStateAction<IGame>>
}
