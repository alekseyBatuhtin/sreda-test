import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Spinner, Link,
} from '@chakra-ui/core';
import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as RepoIcon } from '../../icons/repo.svg';

const RepositoryItem = ({
  name,
  login,
  description,
  url,
  licenseInfo,
  starsCount,
  updatedAt,
  createdAt,
}) => (
  <Box
    borderWidth="1px"
    rounded="lg"
    width="30%"
    minWidth="350px"
    marginBottom="20px"
    marginX="10px"
    padding="8px"
    flexGrow="1"
  >
    <Link href={url} color="#0366d6" fontSize="lg">
      <Text>
        <Box as={RepoIcon} display="inline" marginRight="8px" />
        {`${login}/${name}`}
      </Text>
    </Link>
    {description && <Text fontSize="sm" lineHeight="1.25">{description}</Text>}
    <Box display="flex" alignItems="center" flexWrap="wrap" color="gray.600" marginTop="12px">
      <Text display="inline" marginRight="8px">
        <Box as={StarIcon} display="inline" />
        {starsCount}
      </Text>
      {licenseInfo && <Text marginRight="8px">{licenseInfo.name}</Text>}
      <Text marginRight="8px">{`Created: ${createdAt}`}</Text>
    </Box>
  </Box>
);

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
      <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        transform="transition(-50%, -50%)"
      />
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
      updatedAt: PropTypes.string.isRequired,
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
