import { ITile } from '../../types';

export interface TileProps {
  tile: ITile;
  size: number;
  move: (order: number) => boolean;
  containerWidth: number | null;
}
