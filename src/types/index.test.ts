import { NumToXY } from './coords';

describe('NumToXY: 1d coords to 2d transition', () => {
  test('normal mode', () => {
    const arg = Math.floor(Math.random() * 1000);
    expect(NumToXY(arg, 3)).toStrictEqual({
      x: arg - Math.floor(arg / 3) * 3,
      y: Math.floor(arg / 3)
    });
  });

  test('error in size', () => {
    expect(NumToXY(10, 0)).toStrictEqual({
      x: NaN,
      y: Infinity
    });
  });
});
