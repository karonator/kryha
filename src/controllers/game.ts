import { ITileField, NumToXY } from '../types';

export const genTiles = (size: number): ITileField => {
  const orders = Array.from(Array(size * size).keys())
    .map((order) => ({ order, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ order }) => order);

  const tiles = orders.map((order, index) => ({
    index,
    order,
    empty: false
  }));

  tiles[Math.floor(Math.random() * tiles.length)].empty = true;

  return tiles;
};

export const performMove = (field:ITileField, order: number, size: number): ITileField | null => {
  const { x, y } = NumToXY(order, size);
  const empty = field.find((tile) => tile.empty);
  if (empty) {
    const emptyCoords = NumToXY(empty.order, size);
    if (
      (((x + 1 === emptyCoords.x) || (x - 1 === emptyCoords.x)) && y === emptyCoords.y)
      || (((y + 1 === emptyCoords.y) || (y - 1 === emptyCoords.y)) && x === emptyCoords.x)
    ) {
      const updatedTiles = field.map((tile) => {
        switch (tile.order) {
          case empty.order:
            return {
              ...tile,
              order
            };
          case order:
            return {
              ...tile,
              order: empty.order
            };
          default:
            return tile;
        }
      });
      return updatedTiles;
    }
  }
  return null;
};
