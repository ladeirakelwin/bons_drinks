import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contato from './Components/Contato/Contato';
import Drinks from './Components/Drinks/Drinks';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" children={<Contato/>}></Route>
            <Route path="/about" children={<About/>}></Route>
            <Route path="/drinks" children={<Drinks/>}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}


