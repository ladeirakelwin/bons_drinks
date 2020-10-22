import React, { Component } from 'react'
import './App.css';
import Contato from './Components/Contato/Contato';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Contato/>
        <Footer/>
      </div>
    )
  }
}


