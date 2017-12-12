import React, {Component} from 'react';
import Adsense from 'react-adsense';
import {NavLink} from 'react-router-dom';

export default class Pedals extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='pedals_box' >
        <h1> This is the pedals page </h1>
      </div>
    )
  }

}
