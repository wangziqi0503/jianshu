import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from "./style";
import Header from './common/header';
import store from './store';


class App extends Component {
  render(){
    return (  
      <div>
        <Provider store={store}>
          <Header />
          <GlobalStyle />
        </Provider>
      </div>
    )
  }
}

export default App;
