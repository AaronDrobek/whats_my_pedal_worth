import React, {Component} from 'react';
import Adsense from 'react-adsense';
import {NavLink} from 'react-router-dom';
import products from '../data/products';

export default class Pedals extends Component{
  constructor(props){
    super(props);
    this.updateSearch=this.updateSearch.bind(this);
    this.state={
      data: [],
      search: '',
      pedals: []
    }
  }

  updateSearch(event){
  this.setState({search: event.target.value.substr(0, 20)});
}

  render(){
    let filterPedals = products.filter((product) =>{
      return product.Brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
    console.log(products, 'this is products list');

    let listProducts = filterPedals.map((product, i)=>{
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
          <input className = 'search_box' onChange={this.updateSearch} value={this.state.search} placeholder = 'search by brand, model number, or pedal name' />

          {listProducts}

        </div>
      </div>
    )
  }

}
