/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import fetchData from '../http';

test('!url', () => {
  function searchUrl() {
    fetchData();
  }
  expect(searchUrl).toThrow(Error);
});
