import React, {Component} from 'react';
import Adsense from 'react-adsense';
export default class BaseLayout extends Component{
constructor(props){
  super(props);
}
  render(){
    return(
      <div className='base_layout'>
      {this.props.children}
      </div>
    )
  }
}
