import React, {Component} from 'react';
import Adsense from 'react-adsense';
export default class BaseLayout extends Component{
constructor(props){
  super(props);
}
  render(){
    return(
      <div className='base_layout'>
        <div className = 'header'>
          <div className = 'header1'>
          </div>
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
