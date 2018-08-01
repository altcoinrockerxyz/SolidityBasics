require('events').EventEmitter.defaultMaxListeners = 0;

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// Update via Lecture 47
const provider = ganache.provider();
const web3 = new Web3(provider);

// import the bytecode and interface from compile.js
// require an object that has interface and bytecode properties
const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {

  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });
});

// First Test to make sure everything is working up to this point
describe('Lottery Contract', () => {

  it('deploys a contract', () => {
    assert.ok(lottery.options.address);
  });

  // check if it accepts entries
  it('allows multiple accounts to enter', async () => {
    await lottery.methods.enter().send ({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether'),
      gas: '1000000' // added based on https://github.com/trufflesuite/truffle/issues/748
    });

    await lottery.methods.enter().send ({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether'),
      gas: '1000000' // added based on https://github.com/trufflesuite/truffle/issues/748
    });

    await lottery.methods.enter().send ({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether'),
      gas: '1000000' // added based on https://github.com/trufflesuite/truffle/issues/748
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);

  });  // end it

  // ERROR CATCHER ROUTINE - Try-Catch
  it('requires a minimum amount of ether to enter', async () => {
    try {
      await lottery.methods.enter().send ({
        from: accounts[0],
        value: 200,
        gas: '1000000'
    });

    // failing assertion immediately after the await
    assert(false);

    } catch (err) {
      // add an assertion
      assert(err);
    }

  });

  it('only manager can call pickWinner', async () => {
    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1],
        value: 200,
        gas: '1000000'
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  // test with one player
  it('sends money to the winner and resets the players array', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether'),
      gas: '1000000'
    });

    const initialBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickWinner().send({ from: accounts[0] }); // attempt to pick a winner
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;

    // how to know amount of gas, do a console.console.log();
    // console.log(finalBalance - initialBalance);

    // allow for some amount of gas cost
    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });

}); // end describe

// Second Test attempt to enter an address into the lottery
// Assert that this players address appears in the players array
// via getPlayers method
