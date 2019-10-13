import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@chakra-ui/core';


import SearchRepositories, { reducer, genMonthAgoDate } from '../SearchRepositories';

describe('SearchRepositories test', () => {
  test('SearchRepositories render', () => {
    const component = renderer.create(
      <ThemeProvider>
        <SearchRepositories />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Reducer test', () => {
    test('Repos fetching', () => {
      const newState = reducer({ fetchRepositories: false }, {
        type: 'FETCH_REPOSITORIES',
      });
      expect(newState).toEqual({
        fetchRepositories: true,
      });
    });
    test('Repos fetching success', () => {
      const repos = [1, 2, 3];
      const newState = reducer({ fetchRepositories: true, repositories: [] }, {
        type: 'FETCH_REPOSITORIES_SUCCESS',
        payload: repos,
      });
      expect(newState).toEqual({
        fetchRepositories: false,
        repositories: repos,
      });
    });
  });
});

describe('genMonthAgoDate test', () => {
  test('without args', () => {
    expect(genMonthAgoDate()).toEqual(expect.any(String));
  });
  test('Parse is correct', () => {
    expect(genMonthAgoDate(new Date(2018, 1, 2))).toEqual('2018-01-01');
  });
});
