import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import Account from './Components/Account';
import Signup from './Components/Signup';
import Create from './Components/Create';
import List from './Components/List';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/" component={List} exact={true}/>
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/signup" component={Signup} />
      <Route path="/create" component={Create} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
