import React, { Component } from "react";
// import logo from "./logo.svg";
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
    balance: "",
    value: "",
    message: ""
    // winner: ""
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    // react codes don't need a from property

    const players = await lottery.methods.getPlayers().call(); // get number of players
    const balance = await web3.eth.getBalance(lottery.options.address); // total amount raised
    // const balance is an object, not a number

    // const winner = await lottery.methods.getLastWinner().call();

    // set a state for the property called manager
    this.setState({ manager, players, balance });
  }

  // event handler using babble upgrade
  onSubmit = async event => {
    event.preventDefault(); // value is automatically be set to be equal to our component

    // write a code to send a transaction (async)

    // list the account we are going to use
    // before calling directly the contract send
    const accounts = await web3.eth.getAccounts();

    // a short message while waiting for transaction to push through
    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      // value and from Property
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });

    // show this message once the fund is sent
    this.setState({ message: "You have been entered!" });
  };

  onClick = async event => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on pickWinner transaction success..." });

    await lottery.methods.pickWinner().send({
      // who is sending in the transaction (source account)
      from: accounts[0]
    });

    this.setState({
      // find a way to show the winning entry
      // message: this.state.winner,
      message: " <- won this round!"
    });
  };

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

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <hr />

        <h1>{this.state.message}</h1>
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
