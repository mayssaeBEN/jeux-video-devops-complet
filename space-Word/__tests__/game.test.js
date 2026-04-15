const {
  getRandomInt,
  rectIntersect,
  circleIntersect,
  timeToString
} = require('../script'); 

test('getRandomInt(-42, 42) < 43', () => {
  expect(getRandomInt(-42, 42)).toBeLessThan(43);
});

test('getRandomInt(42, 42) retourne 42', () => {
  expect(getRandomInt(42, 42)).toBe(42);
});

test('rectIntersect false', () => {
  expect(rectIntersect(1,1,2,1,4,1,1,2)).toBe(false);
});

test('rectIntersect true', () => {
  expect(rectIntersect(1,1,5,2,4,1,1,2)).toBe(true);
});

test('circleIntersect false', () => {
  expect(circleIntersect(3,2,1,6,1,1.5)).toBe(false);
});

test('circleIntersect true', () => {
  expect(circleIntersect(3,2,1,3,-2,4)).toBe(true);
});

test('timeToString(123456789)', () => {
  expect(timeToString(123456789)).toBe("17:36:78");
});

test('timeToString("toto")', () => {
  expect(timeToString("toto")).toBe("NaN:NaN:NaN");
}); 

test('getRandomInt(0, 0) retourne 0', () => {
  expect(getRandomInt(0, 0)).toBe(0);
});

test('rectangles identiques', () => {
  expect(rectIntersect(0,0,2,2,0,0,2,2)).toBe(true);
});

test('cercles tangents', () => {
  expect(circleIntersect(0,0,1,2,0,1)).toBe(true);
});

test('timeToString(0)', () => {
  expect(timeToString(0)).toBe("00:00:00");
});

test('timeToString(60000)', () => {
  expect(timeToString(60000)).toBe("01:00:00");
}); 