import React, { Component } from 'react';
/*
import logo from './src/logo.svg';
import '.App.css';*/
/*added*/
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Pages/HomePage.js';
import NavBar from './HeaderComponent/NavBar.js';
import Footer from './FooterComponent/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
		        <Footer />
        </div>
      </Router>

      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
