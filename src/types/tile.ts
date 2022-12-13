export interface ITile {
  index: number;
  order: number;
  empty: boolean;
}

export type ITileField = Array<ITile>;
