export interface ICoords2D {
  x: number;
  y: number;
}

export const NumToXY = (order: number, size: number): ICoords2D => {
  const row = Math.floor(order / size);
  const col = order - row * size;
  return {
    x: col,
    y: row
  };
};
