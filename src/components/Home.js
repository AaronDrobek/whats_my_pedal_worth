import React, { Component } from 'react';
import Adsense from 'react-adsense';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';

export default class Home extends Component {
  render() {
    return (
      <div className = 'home_box'>
        <div className = 'home_content'>
          <div className = 'header'>

            <h2> What is your pedal worth? </h2>
          </div>
          <div className = 'home_image'>
          </div>
        </div>
      </div>
    );
  }
}


// <img src={logo} className="App-logo" alt="logo" />
