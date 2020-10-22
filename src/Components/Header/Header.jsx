import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '../List/List';
import { headerItemBilbo,  header, headerUnlist } from './Header.module.css';

const Header = () => {
  return (
    <header className={ header }>
        <ul className={ headerUnlist }>
          <List><NavLink to="drinks">Drinks</NavLink></List>
          <List> <NavLink to="about">Sobre Nós</NavLink> </List>
          <List style={ headerItemBilbo }>Bons Drinks</List>
          <List>Nosso Time</List>
          <List> <NavLink to="/">Contato</NavLink> </List>
        </ul>
      </header>
  )
}

export default Header

