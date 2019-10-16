import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@chakra-ui/core';

import SearchRepositories from '../SearchRepositories';

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
});
