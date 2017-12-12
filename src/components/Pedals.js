import React, {Component} from 'react';
import Adsense from 'react-adsense';
import {NavLink} from 'react-router-dom';
import products from '../data/products';

export default class Pedals extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(products, 'this is products list');

    let listProducts = products.map((product)=>{
      console.log(product.Brand, 'this is Brand Name*************');
      return(
        <div className = 'each_pedal'>
          <h3>{product.productName}</h3>
        </div>
      )
    })
    return(
      <div className='pedals_box' >
        <div className = 'pedals_box_content'>
        <h1> This is the pedals page </h1>
        </div>
      </div>
    )
  }

}
