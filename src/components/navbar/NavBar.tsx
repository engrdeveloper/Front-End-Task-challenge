import React from 'react';
import { Nav, NavbarContainer, NavLogo, MenuItem, MenuLink, Menu } from './Navbar.styles';


const Navbar: React.FC = () => {
  return (
    <Nav>
    <NavbarContainer>
      <NavLogo to="/">Sohaib Front-end Task</NavLogo>
      <Menu>
        <MenuItem>
          <MenuLink to="/list-tasks">Tasks</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/create-task">Create Tasks</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/bulk-delete">Delete Task</MenuLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
