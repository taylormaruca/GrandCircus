// what to wear based on temp and type of event 
// casual "something comfy", semi-formal "a polo", formal "a suit"
// <54 degrees "a coat"
// 54-70 degrees "a jacket"
// >70 degrees "no jacket"

const { whatToWear } = require('./index');

describe('what to wear', () => {
  test('casual and below 54', () => {
    expect(whatToWear('casual', 32)).toBe("Something comfy and a coat");
  });

  test('casual and between 54 and 70', () => {
    expect(whatToWear('casual', 60)).toBe("Something comfy and a jacket");
  });

  test('casual and above 70 degrees', () => {
    expect(whatToWear('casual', 72)).toBe("Something comfy and no jacket");
  });

  test('semi-formal and below 54', () => {
    expect(whatToWear('semi-formal', 32)).toBe("A polo and a coat");
  });

  test('semi-formal and between 54 and 70', () => {
    expect(whatToWear('semi-formal', 60)).toBe("A polo and a jacket");
  });

  test('semi-formal and above 70 degrees', () => {
    expect(whatToWear('semi-formal', 75)).toBe("A polo and no jacket");
  });

  test('formal and below 54', () => {
    expect(whatToWear('formal', 32)).toBe("A suit and a jacket");
  });

  test('formal and between 54 and 70', () => {
    expect(whatToWear('formal', 67)).toBe("A suit and a coat");
  });

  test('formal and above 70 degrees', () => {
    expect(whatToWear('formal', 100)).toBe("A suit and no jacket");
  });

//   test('will convert regardless of unit casing f', () => {
//     expect(convertTemp(32, 'f')).toEqual(0);
//   });

//   test('will show error if c or f is not provided', () => {
//     expect(() => convertTemp(0)).toThrow('Invalid unit');
//   });

//   test('invalid input', () => {
//     expect(() => convertTemp('F')).toThrow('Temp was not provided');
//   });
});

// describe("What to wear", () => {
//   test("", () => {
//     expect(true).toBe(true);
//   });
// });
