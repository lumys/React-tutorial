import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultButton = ({ disabled, children, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

DefaultButton.propTypes = {
  disabled: PropTypes.bool,

  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  onClick: PropTypes.func,
};

DefaultButton.defaultProps = {
  disabled: false,
  children: null,
  onClick: null,
};

const StyledButton = styled.button``;

export default DefaultButton;
