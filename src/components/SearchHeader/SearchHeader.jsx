import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import {
  Box, Input, Button, Select,
} from '@chakra-ui/core';
import get from 'lodash.get';

import { getLicenses } from '../../queries';

function SearchHeader({
  query,
  handleChangeQuery,
  licenseType,
  handleChangeLicenseType,
  handleSearch,
}) {
  const { data } = useQuery(getLicenses);
  const licenses = get(data, ['licenses'], []);
  return (
    <Box
      as="header"
      display="flex"
      paddingX="20px"
      paddingY="12px"
      borderBottomWidth="1px"
      flexWrap="wrap"
    >
      <Input
        value={query}
        onChange={handleChangeQuery}
        minWidth="280px"
        flexBasis="45%"
        flexGrow="1"
        placeholder="Search..."
        marginBottom="8px"
      />
      <Select
        placeholder="License type"
        selectProps={{ onChange: handleChangeLicenseType }}
        value={licenseType}
        flexBasis="45%"
        flexGrow="1"
        minWidth="280px"
        marginBottom="8px"
      >
        {licenses.map((license) => (
          <option
            key={license.id}
            value={license.key}
          >
            {license.name}
          </option>
        ))}
      </Select>
      <Button onClick={handleSearch} flexGrow="1">Submit</Button>
    </Box>
  );
}

SearchHeader.propTypes = {
  query: PropTypes.string.isRequired,
  handleChangeQuery: PropTypes.func.isRequired,
  handleChangeLicenseType: PropTypes.func.isRequired,
  licenseType: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchHeader;
