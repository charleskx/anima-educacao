import React from 'react';

import PropTypes from 'prop-types';

import { Container, Loader } from './styles';

export default function Spinner({ loading }) {
  return (
    <Container active={loading}>
      <Loader />
    </Container>
  );
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};
