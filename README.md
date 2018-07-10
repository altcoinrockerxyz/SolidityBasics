# Solidity Basics
A compilation of lessons I learned from @StephenGrider via Udemy


**Transaction Parameters**

| Variables  | Descriptions |
| ------------- | ------------- |
| nonce  | How many times the sender has sent a transaction  |
| to  | Address of account this money is going to  |
| value  | Amount of ether to send to the target address  |
| gasPrice  | Amount of ether the sender is willing to pay per unit gas to get this transaction processed  |
| startGas/gasLimit  | Units of gas that this transaction can consume  |
| v  | Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key.  |
| r  | Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key.  |
| s  | Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key.  |


**Common Function Types**

| Function Type  | Descriptions |
| ------------- | ------------- |
|  public  |  Anyone can call this function  |
|  private  |  Only this contract can call this function  |
|  view  |  This function returns data and does NOT modify the contract’s data  |
|  constant  |  This function returns data and does NOT modify the contract’s data  |
|  pure  |  Function will not modify or even READ the contract’s data  |
|  payable  |  When someone call this function they might send ether along  |


**Running Contract Functions**
Two ways to invoke a function that belongs to a contract

|  'Calling' a Function  | Sending a 'Transaction' to a Function  |
| ------------- | ------------- |
|  Cannot modify contract's data  |  Can modify a contract's data  |
|  Can return data  |  Takes time to execute  |
|  Runs instantly  |  Returns the transaction hash  |
|  Free to do  |  Costs money  |

Sending a Transaction to a Function will modify the data within the contract


**Trick**
*How to install Solidity text highlighting in Atom*
1. Go to Atom > Preferences > Install
2. Type language-solidity on the search box
3. Click Packages (not Themes)
4. Choose language-solidity and click Install


**Web3 Versioning Issues**
*Awareness will help save time*

|  v0.x.x  | v1.x.x (version we are using) |
| ------------- | ------------- |
|  "Primitive" interface - only callbacks for async code  |  Support for promises + async/await syntax  |


**Mocha Functions**
*A shortlist of most commonly used functions*

|  Function  | Purpose |
| ------------- | ------------- |
|  it  |  Run a test and make an assertion  |
|  describe  |  Groups together 'it' functions  |
|  beforeEach  |  Execute some general setup code  |
