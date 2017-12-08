import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="home_box">
          <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default Home;
