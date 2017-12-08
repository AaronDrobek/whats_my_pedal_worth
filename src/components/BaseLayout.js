import React, {Component} from 'react';

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
