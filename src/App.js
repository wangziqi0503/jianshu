import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from "./style";
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';


class App extends Component {
  render(){
    return (  
      <div>
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
            <GlobalStyle />
        </Provider>
      </div>
    )
  }
}

export default App;
