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
  <Box display="flex" paddingX="20px" paddingY="12px">
    <Input value={query} onChange={handleChangeQuery} flexGrow="1" placeholder="Search..." />
    <Select
      placeholder="License type"
      selectProps={
        { onChange: handleChangeLicenseType }
      }
      value={licenseType}
      marginLeft="8px"
      width="300px"
    >
      {licenses.map((license) => (
        <option
          key={license.id}
          value={license.id}
        >
          {license.name}
        </option>
      ))}
    </Select>
    <Button onClick={handleSearch} marginLeft="8px" width="120px">Submit</Button>
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
