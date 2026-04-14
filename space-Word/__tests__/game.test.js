const { getRandomInt } = require('../script');

test('getRandomInt retourne une valeur dans l’intervalle', () => {
  const result = getRandomInt(-42, 42);
  expect(result).toBeLessThan(43);
}); 