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
      const payload = {
        repositories: [1, 2, 3],
        pagination: {
          hasNextPage: false,
          hasPreviosPage: false,
        },
      };
      const newState = reducer({ fetchRepositories: true, repositories: [], pagination: {} }, {
        type: 'FETCH_REPOSITORIES_SUCCESS',
        payload,
      });
      expect(newState).toEqual({
        fetchRepositories: false,
        repositories: payload.repositories,
        pagination: payload.pagination,
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
