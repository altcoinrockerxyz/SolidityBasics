import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import the web3 file
import web3 from "./web3";

// import the local instance of the contract
import lottery from "./lottery";

// this is what renders the contract call to the screen
class App extends Component {
  /**  constructor(props) {
    super(props);

    this.state = { manager: "" }; // initial state of manager is empty
  } **/
  // state runs entirely on constructor REFACTORED
  state = {
    manager: "",
    players: [],
    balance: ""
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    // react codes don't need a from property

    const players = await lottery.methods.getPlayers().call(); // get number of players
    const balance = await web3.eth.getBalance(lottery.options.address); // total amount raised
    // const balance is an object, not a number

    // set a state for the property called manager
    this.setState({ manager, players, balance });
  }
  render() {
    // console.log(web3.version); // shows version on browser console
    // web3.eth.getAccounts() // print out a list of all the accounts tied to this instance of web3
    //  .then(console.log); // anything the getAccounts retrieved will be passed into the console

    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. There are currently{" "}
          {this.state.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ethers!
        </p>
      </div>

      /** replace by what we need for the lottery contract
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      **/
    );
  }
}

export default App;
