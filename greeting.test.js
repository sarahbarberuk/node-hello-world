const greeting = require('./greeting');

test('Gives a flattering greeting', () => {
  expect(greeting() === "You are so good looking!" || 
         greeting() === "You're the smartest person alive!" || 
         greeting() === "Everyone loves you.")
    .toBeTruthy();
});