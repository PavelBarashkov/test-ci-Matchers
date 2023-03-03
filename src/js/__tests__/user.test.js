/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
