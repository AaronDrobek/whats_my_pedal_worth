import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import Price from './components/Price';
import Home from './components/Home';
import Pedals from './components/Pedals';
import GoogleAdsense from './components/GoogleAdsense';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route path = '/pedals' component = {Pedals}/>
  <Route path = '/price' component = {Price}/>
  <Route path = '/' component = {Home}/>
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
