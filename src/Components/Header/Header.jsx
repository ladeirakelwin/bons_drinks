import React, { Component } from 'react';
import List from '../List/List';
import { headerItemBilbo,  header, headerUnlist } from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={ header }>
        <ul className={ headerUnlist }>
          <List>Drinks</List>
          <List>Sobre Nós</List>
          <List style={ headerItemBilbo }>Bons Drinks</List>
          <List>Nosso Time</List>
          <List>Contato</List>
        </ul>
      </header>
    )
  }
}
