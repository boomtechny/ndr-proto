import React, { Component } from 'react';
import ndrlogo from './assets/images/ndr_logo.png';
import ReactDOM from 'react-dom';
import style from './assets/stylesheets/style.scss';
import Header from './modules/Header';
import PrivacyPolicy from './pages/PrivacyPolicy';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Header></Header>

         <img src={ndrlogo} className="App-logo" alt="logo" />
          <h1>NDR-PrivacyPolicyPagePrototype</h1>
       
        <PrivacyPolicy></PrivacyPolicy>
    
      </div>
    );
  }
}

export default App;
