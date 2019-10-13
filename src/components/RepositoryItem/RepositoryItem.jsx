import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text, Link } from '@chakra-ui/core';
import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as RepoIcon } from '../../icons/repo.svg';
import { ReactComponent as ForkIcon } from '../../icons/fork.svg';

const RepositoryItem = ({
  name,
  login,
  description,
  url,
  licenseInfo,
  starsCount,
  forkCount,
  createdAt,
}) => (
  <Box
    borderWidth="1px"
    rounded="lg"
    width="30%"
    minWidth="280px"
    marginBottom="20px"
    marginX="10px"
    padding="8px"
    flexBasis="30%"
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
        <Box as={StarIcon} display="inline" marginRight="4px" />
        {starsCount}
      </Text>
      <Text display="inline" marginRight="8px">
        <Box as={ForkIcon} display="inline" marginRight="4px" />
        {forkCount}
      </Text>
      {licenseInfo && <Text marginRight="8px">{licenseInfo.name}</Text>}
      <Text marginRight="8px">{`Created: ${createdAt}`}</Text>
    </Box>
  </Box>
);

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  licenseInfo: PropTypes.shape({ name: PropTypes.string }),
  starsCount: PropTypes.number.isRequired,
  forkCount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

RepositoryItem.defaultProps = {
  description: null,
  licenseInfo: null,
};

export default RepositoryItem;
