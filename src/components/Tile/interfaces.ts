import { ITile } from '../../types';

export interface TileProps {
  tile: ITile;
  fieldSize: number;
  move: (order: number) => boolean;
  containerWidth: number | null;
  imageMode: boolean;
}
