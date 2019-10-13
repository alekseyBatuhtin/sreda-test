import React from 'react';
import PropTypes from 'prop-types';
import { Box, Spinner } from '@chakra-ui/core';

import RepositoryItem from '../RepositoryItem';

const RepositoriesList = ({ fetch, repositories }) => (
  <Box
    display="flex"
    position="relative"
    flexDirection="row"
    justifyContent="flex-start"
    flexWrap="wrap"
    height="100%"
    paddingX="12px"
    paddingTop="12px"
    overflow="auto"
  >
    {fetch && (
      <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="white" opacity="0.7">
        <Spinner
          size="xl"
          position="absolute"
          left="calc(50% - 22px)"
          top="calc(50% - 22px)"
        />
      </Box>
    )}
    {repositories.length
      ? repositories.map((repository) => (
        <RepositoryItem
          key={repository.id}
          name={repository.name}
          login={repository.owner.login}
          description={repository.description}
          url={repository.url}
          licenseInfo={repository.licenseInfo}
          starsCount={repository.stargazers.totalCount}
          forkCount={repository.forks.totalCount}
          createdAt={repository.createdAt}
          updatedAt={repository.updatedAt}
        />
      ))
      : 'No data'}
  </Box>
);

RepositoriesList.propTypes = {
  fetch: PropTypes.bool.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string,
      }).isRequired,
      stargazers: PropTypes.shape({
        totalCount: PropTypes.number,
      }).isRequired,
      forks: PropTypes.shape({
        totalCount: PropTypes.number,
      }).isRequired,
    }),
  ).isRequired,
};

export default RepositoriesList;
