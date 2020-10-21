import React, { Component } from 'react'
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    )
  }
}


