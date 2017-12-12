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

    let listProducts = products.map((product, i)=>{
      // console.log(product.Brand, 'this is Brand Name*************');
      return(
        <div className = 'each_pedal' key={i}>
          <h3 style={{textAlign: 'center'}}>{product.Brand}</h3>
        </div>
      )
    })
    return(
      <div className='pedals_box' >
        <div className = 'pedals_box_content'>
          <input className = 'search_box' placeholder = 'search by brand, model number, or pedal name' />

          {listProducts}

        </div>
      </div>
    )
  }

}
