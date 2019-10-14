import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, Button } from '@chakra-ui/core';

const Pagination = ({ hasNextPage, hasPreviousPage, handleChangePage }) => (
  !hasNextPage && !hasPreviousPage
    ? null
    : (
      <ButtonGroup display="flex" justifyContent="center" paddingY="12px" borderTopWidth="1px">
        <Button isDisabled={!hasPreviousPage} variantColor="blue" variant="solid" onClick={handleChangePage('prev')}>Previous</Button>
        <Button isDisabled={!hasNextPage} variantColor="blue" variant="solid" onClick={handleChangePage('next')}>Next</Button>
      </ButtonGroup>
    ));

Pagination.propTypes = {
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  handleChangePage: PropTypes.func,
};

Pagination.defaultProps = {
  handleChangePage: () => {},
};

export default Pagination;
