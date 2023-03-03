/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import sortArr from '../app';

test('sort health', () => {
  const beforArr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const afterArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortArr(beforArr);
  expect(result).toEqual(afterArr);
});
