import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${props => (props.disabled ? '#0000001f' : '#2196f3')};
  background-image: ${props => `url(${props.icon})`};

  :hover,
  :focus {
    background-color: #1976d2;
  }
`;
