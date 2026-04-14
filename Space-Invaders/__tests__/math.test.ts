import { clamp, lerp } from '../src/ts/math/math';
import { normalize, dot, add, subtract, distance } from '../src/ts/math/vector';

// Tests fournis — clamp
test('clamp(1,10,2) returns 2', () => {
  expect(clamp(1, 10, 2)).toBe(2);
});

test('clamp(1,10,-12) returns 1', () => {
  expect(clamp(1, 10, -12)).toBe(1);
});

// Tests fournis — lerp
test('lerp(1,10,2) returns 19', () => {
  expect(lerp(1, 10, 2)).toBe(19);
});

test('lerp(1,10,-12) returns -107', () => {
  expect(lerp(1, 10, -12)).toBe(-107);
});

// Tests fournis — normalize, dot, add, subtract
test('normalize({x:5, y:50})', () => {
  expect(normalize({ x: 5, y: 50 })).toEqual({
    x: 0.09950371902099892,
    y: 0.9950371902099892,
  });
});

test('dot({x:5,y:50},{x:10,y:100}) returns 5050', () => {
  expect(dot({ x: 5, y: 50 }, { x: 10, y: 100 })).toBe(5050);
});

test('add({x:5,y:50},{x:10,y:100}) returns {x:15,y:150}', () => {
  expect(add({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: 15, y: 150 });
});

test('subtract({x:5,y:50},{x:10,y:100}) returns {x:-5,y:-50}', () => {
  expect(subtract({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: -5, y: -50 });
});

// 5 tests supplémentaires
test('clamp retourne max si v > max', () => {
  expect(clamp(0, 10, 999)).toBe(10);
});

test('clamp retourne v si entre min et max', () => {
  expect(clamp(0, 100, 50)).toBe(50);
});

test('lerp avec v=0 retourne start', () => {
  expect(lerp(5, 20, 0)).toBe(5);
});

test('lerp avec v=1 retourne end', () => {
  expect(lerp(5, 20, 1)).toBe(20);
});

test('add avec zéros retourne vecteur identique', () => {
  expect(add({ x: 3, y: 7 }, { x: 0, y: 0 })).toEqual({ x: 3, y: 7 });
});

import { distance as polarDistance, toVector } from '../src/ts/math/polar-vector';

// Tests fournis — distance
test('distance({angle:5,radius:50},{angle:10,radius:100}) returns 98.30248290540649', () => {
  expect(polarDistance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 })).toBe(98.30248290540649);
});

test('distance({angle:5,radius:50},{angle:-10,radius:100}) returns 141.76346189546945', () => {
  expect(polarDistance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 })).toBe(141.76346189546945);
});

// Tests fournis — toVector
test('toVector({angle:5,radius:50},{angle:10,radius:100})', () => {
  expect(toVector({ angle: 5, radius: 50 })).toEqual({
    x: 14.183109273161312,
    y: -47.946213733156924,
  });
});