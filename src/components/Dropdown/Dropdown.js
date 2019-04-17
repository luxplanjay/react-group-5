import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  HamburgerButton,
  DropdownContainer,
  List,
  ListItem,
} from './Dropdown.styled';

const Dropdown = ({ isOpen = false }) => (
  <Container>
    <HamburgerButton type="button">&#9776;</HamburgerButton>

    {isOpen && (
      <DropdownContainer>
        <List>
          <ListItem>Option 1</ListItem>
          <ListItem>Option 2</ListItem>
          <ListItem>Option 3</ListItem>
          <ListItem>Option 4</ListItem>
        </List>
      </DropdownContainer>
    )}
  </Container>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default Dropdown;
