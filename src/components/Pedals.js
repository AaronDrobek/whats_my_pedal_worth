import React, {Component} from 'react';
import Adsense from 'react-adsense';
import {NavLink} from 'react-router-dom';
import products from '../data/products';

export default class Pedals extends Component{
  constructor(props){
    super(props);
    this.updateSearch=this.updateSearch.bind(this);
    // this.searchBrand=this.updateSearch.bind(this);
    this.state={
      products: {},
      search: '',
      pedals: []
    }
  }

  updateSearch(event){
  this.setState({search: event.target.value.substr(0, 20)});
}

  // searchBrand(event){
  //   this.setState({model: event.target.value.substr(0, 20)});
  // }
  render(){
    // let filterPedals = this.state.products.filter((product)=>{
    let filterBrand = products.filter((product) =>{

      return product.Brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            //  proName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    let filterModel = products.filter((model) =>{
      // console.log(model.productNAME, 'filterModel product name >>>>>>>>');
      let proName = model.productNAME.toString()

      return proName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

    })



    console.log(products, 'this is products list');
    let listProducts;
    if (filterBrand.length > 0){
    listProducts = filterBrand.map((product, i)=>{
        return(
          <div className = 'each_pedal' key={i}>
            <h3 style={{textAlign: 'center', marginTop: 0}}>{product.Brand}</h3>
            <h6 style={{textAlign: 'center'}}>{product.productNAME}</h6>
          </div>
        )
      })
    }else
    if (filterModel.length > 0){
    listProducts = filterModel.map((model, j)=>{
      return(
        <div className = 'each_pedal' key={j}>
          <h3 style={{textAlign: 'center', marginTop: 0}}>{model.Brand}</h3>
          <h6 style={{textAlign: 'center'}}>{model.productNAME}</h6>
        </div>
      )
    })

  }else{

      listProducts =
        <div className = 'no_results'>
          <h3> Sorry No Results</h3>
        </div>
        }



    return(
      <div className='pedals_box' >
        <div className = 'pedals_box_content'>
          <input className = 'search_box' onChange={this.updateSearch} value={this.state.search} placeholder = 'search by brand or model' />

          {listProducts}

        </div>
      </div>
    )
  }

}
// <input className = 'search_box_brand' onChange={this.searchBrand} value={this.state.model} placeholder = 'search by pedal model' />
