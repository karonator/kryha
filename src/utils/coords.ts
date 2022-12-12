export interface Coords2D {
  x: number;
  y: number;
}

export const NumToXY = (order: number, size: number): Coords2D => {
  const row = Math.floor(order / size);
  const col = order - row * size;
  return {
    x: col,
    y: row
  };
};
