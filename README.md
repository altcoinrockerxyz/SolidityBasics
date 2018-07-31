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




**Understanding ABI Interface**

*The ABI is how we get some intermediation/conversion/interface between the Solidity world and the JavaScript world. For this process to take place, the JSON file has to be parsed (via web3.eth.Contract constructor) and specify the need to interact with ABI aspect from all the contents of the JSON file i.e. web3.eth.Contact(JSON.parse(interface)). The ABI is the JavaScript object aspect of the whole JSON file.*

**Notes on deploy function/method**
*The deploy creates a transaction with two properties (the data or bytecode, and the arguments). It calls an object that can be deployed on the network.*

**Notes on send function/method**
*The actual sending to the network is managed by the send function*

**Web3 Usage in Contracts**

|  Goal  | ABI |  Bytecode  | Address of deployed contract |
| ------------- | ------------- | ------------- | ------------- |
|  Interact with deployed contract  |  /  |  X  |  /  |
|  Create a contract  |  /  |  /  |  X  |

**Lecture 49**

*Deploying to Rinkeby Test Network via Infura Service* - a public API we can sign up for and gives us ability to gain access to a node that is hosted on the Rinkeby network by Infura.

- To deploy, type *node deploy.js* on terminal window.
- Once it is deployed, a contract address will be shown.
- Upon receiving the *contract address*, open *Remix* and make sure the Test solidity code created at the start of the lesson (with message and setMessage methods) is on the text editor.
- Make sure the correct contract creator address is online via Metamask-Rinkeby
- Set the *Environment* to *Injected Web3*
- Check to see if Metamask address is the same one shown on the *Account* field right below *Environment*
- Afterwards, paste the contract address on the "*At Address*" form field right below the Inbox header.
- Click the *At Address* button to see the deployed instance of the contract as well as all available methods (two lines below it)

**The 'msg' Global Variable**

*This 'msg' global variable is available both when we -send a transaction in- and when we do a Call*

|  Property Name  | Description  |
| ------------- | ------------- |
|  msg.data  |  'Data' field from the call or transaction that invoked the current function  |
|  msg.gas  |  Amount of gas the current function invocation has available  |
|  msg.sender  |  Address of the account that started the current function invocation  |
|  msg.value  |  Amount of ether (in wei) that was sent along with the function invocation  |

**Reference Types**

*https://imgur.com/lB2RP1v*


**Lecture 67:** Remix Debugger https://imgur.com/td9C2zt

**Lecture 73: Function Modifiers**

*A means to reduce the amount of written code*
