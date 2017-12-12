import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Adsense from 'react-adsense';
export default class BaseLayout extends Component{
constructor(props){
  super(props);
}
  render(){
    return(
      <div className='base_layout'>
        <div className = 'header'>
          <NavLink style={{textDecoration: 'none'}} to = '/'><div className = 'header1'>
            <h1 style={{color: 'white'}}> What Is Your Pedal Worth? </h1>
          </div></NavLink>
              <div className = 'header2'>
              </div>
                  <div className = 'header3'>
                  </div>
                      <div className = 'header4'>
                      </div>
                          <div className = 'header5'>
                          </div>
                              <div className = 'header6'>
                              </div>
        </div>
      {this.props.children}
      </div>
    )
  }
}
