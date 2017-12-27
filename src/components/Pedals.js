import React, {Component} from 'react';
import Adsense from 'react-adsense';
import {NavLink} from 'react-router-dom';
import products from '../data/products';

export default class Pedals extends Component{
  constructor(props){
    super(props);
    this.updateSearch=this.updateSearch.bind(this);
    this.state={
      products: {},
      search: '',
      pedals: []
    }
  }

  updateSearch(event){
  this.setState({search: event.target.value.substr(0, 20)});
}

  render(){
    // let filterPedals = this.state.products.filter((product)=>{
    let filterPedals = products.filter((product) =>{
            // console.log(product, 'product at the point of filter>>>>>>>>>>>>>>>>>>>');
            // return product.productNAME
        // console.log(product.productNAME, 'this is Product Name in filter>>>>>>>>>>>>>>>>>>>>>>>>');
        return product.Brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
              //  product.productID.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        // return 'product';{
        //   'Brand';
        //   'productNAME';
        //   'productID';
        // }

    })



    // console.log(products, 'this is products list');
    let listProducts;
    if (filterPedals.length > 0){
    listProducts = filterPedals.map((product, i)=>{
      // console.log(product.Brand, 'this is Brand Name*************')
      // console.log(product.productNAME, 'this is product Name@@@@@@@@@@');
      // console.log(product.highPrice, 'this is high price');

      return(
        <div className = 'each_pedal' key={i}>
          <h3 style={{textAlign: 'center', marginTop: 0}}>{product.Brand}</h3>
          <h6 style={{textAlign: 'center'}}>{product.productNAME}</h6>
          <h6 style={{textAlign: 'center'}}>{product.productID}</h6>

        </div>
      )
    })

  }else{

      listProducts =
      // <h3 style = {{textAlign: 'center' }}>Sorry No Results</h3>

        <div className = 'no_results'>
          <h3> Sorry No Results</h3>
        </div>

      }



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
