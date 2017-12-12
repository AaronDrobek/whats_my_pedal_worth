import React, {Component} from 'react';
import Adsense from 'react-adsense';

export default class GoogleAdsense extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount () {
   (window.adsbygoogle = window.adsbygoogle || []).push({});
 }

render () {
   return (
     <div className='ad'>
       <ins className='adsbygoogle'
         style={{ display: 'block' }}
         data-ad-client='ca-pub-xxxxxxxxxx'
         data-ad-slot='xxxxxxxxxx'
         data-ad-format='auto' />
     </div>
   );
 }
}
