import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import the web3 file
import web3 from './web3';

class App extends Component {
  render() {
    // console.log(web3.version); // shows version on browser console
    // web3.eth.getAccounts() // print out a list of all the accounts tied to this instance of web3
    //  .then(console.log); // anything the getAccounts retrieved will be passed into the console


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
