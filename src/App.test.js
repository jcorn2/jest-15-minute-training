import  {
  add,
  subtract,
  multiply,
  divide,
} from './App';

describe('arthimetic tests', () => {
  it('1 + 1 = 2', () => {
    expect(add(1, 1)).toEqual(2);
  });

  it('1 - 1 = 0', () => {
    expect(subtract(1, 1)).toEqual(0);
  });

  it('2 * 5 = 10', () => {
    expect(multiply(2, 5)).toEqual(10);
  });

  it('10 / 2 = 5', () => {
    expect(divide(10, 2)).toEqual(5);
  });
});
