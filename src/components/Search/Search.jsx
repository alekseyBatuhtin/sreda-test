import React from 'react';
import PropTypes from 'prop-types';

import {
  Box, Input, Button, Select,
} from '@chakra-ui/core';

const Search = ({
  query,
  handleChangeQuery,
  licenseType,
  licenses,
  handleChangeLicenseType,
  handleSearch,
}) => (
  <Box display="flex" paddingX="20px" paddingY="12px" borderBottomWidth="1px" flexWrap="wrap">
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
      selectProps={
        { onChange: handleChangeLicenseType }
      }
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

Search.propTypes = {
  query: PropTypes.string.isRequired,
  handleChangeQuery: PropTypes.func.isRequired,
  handleChangeLicenseType: PropTypes.func.isRequired,
  licenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  licenseType: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
