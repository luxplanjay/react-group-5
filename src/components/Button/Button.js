import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => (
  <StyledButton type={type} disabled={disabled} icon={icon}>
    {label}
  </StyledButton>
);

export default Button;
