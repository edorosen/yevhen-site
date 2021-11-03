import React from 'react';
import { Nav } from './styles';
import HeaderImg from '../HeaderImg';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      <HeaderImg />
      <Burger />
    </Nav>
  );
};

export default Navbar;