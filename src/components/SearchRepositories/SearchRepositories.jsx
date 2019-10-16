import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { Box, useToast } from '@chakra-ui/core';
import get from 'lodash.get';

import SearchHeader from '../SearchHeader';
import RepositoriesList from '../RepositoriesList';
import Pagination from '../Pagination';

import { searchRepositories } from '../../queries';
import { genSearchQuery } from '../../utils';

function SearchRepositories() {
  const [query, setQuery] = useState('');
  const [licenseType, setLicenseType] = useState('');
  const toast = useToast();

  const handleChangeQuery = (event) => setQuery(event.target.value);
  const handleChangeLicenseType = (event) => setLicenseType(event.target.value);

  const [
    handleSearch,
    {
      data, loading, error, fetchMore,
    },
  ] = useLazyQuery(searchRepositories, {
    variables: {
      querySearch: genSearchQuery(query, licenseType),
      first: 20,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    toast({
      title: 'Error.',
      description: error.message,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }

  const repositories = get(data, ['search', 'nodes'], []);
  const pagination = get(data, ['search', 'pageInfo'], {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
  });

  const handleChangePage = (direction) => () => fetchMore({
    variables: {
      querySearch: genSearchQuery(query, licenseType),
      after: direction === 'next' ? pagination.endCursor : null,
      first: direction === 'next' ? 20 : null,
      before: direction === 'prev' ? pagination.startCursor : null,
      last: direction === 'prev' ? 20 : null,
    },
    updateQuery: (_, { fetchMoreResult }) => fetchMoreResult,
  });

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <SearchHeader
        query={query}
        handleChangeQuery={handleChangeQuery}
        licenseType={licenseType}
        handleChangeLicenseType={handleChangeLicenseType}
        handleSearch={handleSearch}
      />
      <RepositoriesList fetch={loading} repositories={repositories} />
      <Pagination
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}
        handleChangePage={handleChangePage}
      />
    </Box>
  );
}

export default SearchRepositories;
