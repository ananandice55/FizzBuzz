const fizzBuzz = require('./fizzBuzz')

test('num 1 return 1 ',() => {
    expect (fizzBuzz(1)).toBe(1);
  });
  test('num 2 return 2 ',() => {
    expect (fizzBuzz(2)).toBe(2);
  });
  test('num 3 return fizz ',() => {
    expect (fizzBuzz(3)).toBe("Fizz");
  });
  test('num 9 return fizz ',() => {
    expect (fizzBuzz(9)).toBe("Fizz");
  });
  test('num 5 return fizz ',() => {
    expect (fizzBuzz(5)).toBe("Buzz");
  });
  test('num 15 return fizz ',() => {
    expect (fizzBuzz(15)).toBe("FizzBuzz");
  });