import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route path ='/' component = {App} />
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
