# Solidity Basics

A compilation of lessons I learned from @StephenGrider via Udemy

**Transaction Parameters**

| Variables         | Descriptions                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| nonce             | How many times the sender has sent a transaction                                                                                |
| to                | Address of account this money is going to                                                                                       |
| value             | Amount of ether to send to the target address                                                                                   |
| gasPrice          | Amount of ether the sender is willing to pay per unit gas to get this transaction processed                                     |
| startGas/gasLimit | Units of gas that this transaction can consume                                                                                  |
| v                 | Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key. |
| r                 | Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key. |
| s                 | Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key. |

**Common Function Types**

| Function Type | Descriptions                                                       |
| ------------- | ------------------------------------------------------------------ |
| public        | Anyone can call this function                                      |
| private       | Only this contract can call this function                          |
| view          | This function returns data and does NOT modify the contract’s data |
| constant      | This function returns data and does NOT modify the contract’s data |
| pure          | Function will not modify or even READ the contract’s data          |
| payable       | When someone call this function they might send ether along        |

**Running Contract Functions**
Two ways to invoke a function that belongs to a contract

| 'Calling' a Function          | Sending a 'Transaction' to a Function |
| ----------------------------- | ------------------------------------- |
| Cannot modify contract's data | Can modify a contract's data          |
| Can return data               | Takes time to execute                 |
| Runs instantly                | Returns the transaction hash          |
| Free to do                    | Costs money                           |

Sending a Transaction to a Function will modify the data within the contract

**Trick**
_How to install Solidity text highlighting in Atom_

1.  Go to Atom > Preferences > Install
2.  Type language-solidity on the search box
3.  Click Packages (not Themes)
4.  Choose language-solidity and click Install

**Web3 Versioning Issues**
_Awareness will help save time_

| v0.x.x                                                | v1.x.x (version we are using)             |
| ----------------------------------------------------- | ----------------------------------------- |
| "Primitive" interface - only callbacks for async code | Support for promises + async/await syntax |

**Mocha Functions**
_A shortlist of most commonly used functions_

| Function   | Purpose                          |
| ---------- | -------------------------------- |
| it         | Run a test and make an assertion |
| describe   | Groups together 'it' functions   |
| beforeEach | Execute some general setup code  |

**Understanding ABI Interface**

_The ABI is how we get some intermediation/conversion/interface between the Solidity world and the JavaScript world. For this process to take place, the JSON file has to be parsed (via web3.eth.Contract constructor) and specify the need to interact with ABI aspect from all the contents of the JSON file i.e. web3.eth.Contact(JSON.parse(interface)). The ABI is the JavaScript object aspect of the whole JSON file._

**Notes on deploy function/method**
_The deploy creates a transaction with two properties (the data or bytecode, and the arguments). It calls an object that can be deployed on the network._

**Notes on send function/method**
_The actual sending to the network is managed by the send function_

**Web3 Usage in Contracts**

| Goal                            | ABI | Bytecode | Address of deployed contract |
| ------------------------------- | --- | -------- | ---------------------------- |
| Interact with deployed contract | /   | X        | /                            |
| Create a contract               | /   | /        | X                            |

**Lecture 49**

_Deploying to Rinkeby Test Network via Infura Service_ - a public API we can sign up for and gives us ability to gain access to a node that is hosted on the Rinkeby network by Infura.

- To deploy, type _node deploy.js_ on terminal window.
- Once it is deployed, a contract address will be shown.
- Upon receiving the _contract address_, open _Remix_ and make sure the Test solidity code created at the start of the lesson (with message and setMessage methods) is on the text editor.
- Make sure the correct contract creator address is online via Metamask-Rinkeby
- Set the _Environment_ to _Injected Web3_
- Check to see if Metamask address is the same one shown on the _Account_ field right below _Environment_
- Afterwards, paste the contract address on the "_At Address_" form field right below the Inbox header.
- Click the _At Address_ button to see the deployed instance of the contract as well as all available methods (two lines below it)

**The 'msg' Global Variable**

_This 'msg' global variable is available both when we -send a transaction in- and when we do a Call_

| Property Name | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| msg.data      | 'Data' field from the call or transaction that invoked the current function |
| msg.gas       | Amount of gas the current function invocation has available                 |
| msg.sender    | Address of the account that started the current function invocation         |
| msg.value     | Amount of ether (in wei) that was sent along with the function invocation   |

**Reference Types**

_https://imgur.com/lB2RP1v_

**Lecture 67:** Remix Debugger https://imgur.com/td9C2zt

**Lecture 73: Function Modifiers**

_A means to reduce the amount of written code_

**Lecture 73: Permission Denied Error 126**

If faced with this error, delete "node_modules" folder and run "npm install" within the work directory.

**Lecture 85: Ethereum App Architecture (intro to React)**

Whenever an application submits data, it doesn't get processed by the Server, rather it goes straight to the Ethereum Network (via a transaction processor such as Metamask using web3 interface) and from there it gets accessed by the Server to be sent back to the UX.

All the codes that are needed to run, are processed inside the client's browser window - rather than at the server-side.

React makes development way easier than just using Vanilla.

**Lecture 86: Application Overview**

To install React on OS X, run "sudo npm install -g create-react-app"

Objective front-end and descriptions: Generate a new react project - https://imgur.com/RYsSk3T

To create a react app, run "create-react-app lottery-react"

To start, run "npm run start" while inside the react app directory

After a moment or two, it will open a browser tab at localhost:3000

Terminal view once compiled: https://imgur.com/O6zsF7l

Browser view on initial load: https://imgur.com/pS5NeD7

**Lecture 88: Multiple Web3 Instances**

_Installing Web3 Library_

Installing Web3 library is an absolute core pinnacle thing of every ethereum application that's to be put together

Objective: Install web3 v.1.0.0 and hijack the Provider from Metamask (using web3 v0.2) and use it for our web3 v1.0 instance.

**Lecture 89**
_Create web3.js within src directory and add codes to App.js_

**Lecture 90**
_Taking the lottery contract and get it to work with our React application._

- ABI (Interface or communication/translation layer from the Blockchain to the JavaScript world)
- Get the contract ABI and feed it to the web3 interface (local copy of the contract)
- To deploy the project, run "node deploy.js" from within the work directory (not the react directory) https://imgur.com/ZRt6UaX
- If the ff deployment error is encountered, check this link -> https://stackoverflow.com/questions/50201353/unhandledpromiserejectionwarning-error-the-contract-code-couldnt-be-stored-p
  _UnhandledPromiseRejectionWarning: Error: The contract code couldn't be stored, please check your gas limit_ This could be due to hdwallet provider Version https://imgur.com/nXW1y8v

  npm uninstall ethereumjs-wallet
  npm uninstall truffle-hdwallet-provider
  npm install --save ethereumjs-wallet@0.6.0
  npm install --save truffle-hdwallet-provider@0.0.3

**Lecture 91: Local Contract Instances**

_Contract Address of Deployed Lottery via Rinkeby: 0xD5d125104d52BC5d0d06C2c28Ea80CC27BEb3248_

- Create a new file within the react project
- Make a new file within src directory (lottery.js)
- Import web3 Instance (copy the address of deployed contract and ABI into lottery.js)
- Create a local contract instance (copy of the rinkeby-deployed contract)

**Lecture 92: Rendering Contract Data**

_Follows the same sequence of actions_

In order to get any info off of our contract and render it on the screen or component, we'll always gonna follow the same sequence of actions as shown here ->
https://imgur.com/O551qPZ

**Lecture 93: Instance Properties**
_ECMA Script ES 2016 change_
ES2016 helps refactor some codes to be a little more succint (i.e. the constructor of App class)

**Lecture 94: Accessing More Properties**
Show number of players who entered the game
Show how much is total fund raised for lottery

**Lecture 95: The Enter Form**

_Reminder_
set the this.state.value parameter

**Lecture 86: Form Setup**
Capture what is submitted

**Lecture 102: Crowdfunding Contract Design**

The objective of this contract is to set some security measures as to how funds are spent after the project manager (solicitor) receives them. To do this, contributors are given a chance to vote whenever fund use is requested (to be used to pay for some product development milestones).

_Variables and Functions_

https://imgur.com/V5oZIIF

**Lecture 103: Campaign Constructor**

This will contain the two initial variables -- the manager, and the minimumContribution. It initializes the contract by assigning the contract deployer as the manager (since the contract could be used by various fundraisers who will end up becoming the managers of each initialized campaign contracts).

**Lecture 104: Contributing to the Campaign**

This will setup the approvers variable and the contribute function. It will initially declare an array of type address where contributors (approvers) will be stored. It will also have a checker (require) that will validate if the sent fund is greater than or equal to the minimumContribution.

_The contribute function has to have the payable attribute in order for it to be able to accept sent funds_

**Lecture 105: Running Quick Test**

On Remix, go to Run tab and choose JavaScript VM Environment and then find the contract selector box to create an instance (deployment) of the contract. Make sure to be provide a minimumContribution value that will be required whenever an approver decides to contribute -- the lecture settings is 100 Wei.

Deployment Screenshot: https://imgur.com/gpriixq

_Notes: Upon initial depoyment, make sure to input the minimumContribution wei value on the variable beside the Deploy button, instead of the Value form field; When contributing, however, input the amount of Wei on the Value form field before pressing the Contribute button_

**Lecture 106: The Request Struct**

This focuses on implementing the idea of a Spending Request. This requires the creation of a createRequest function and initialization of the requests variable.

Review of Reference Types: https://imgur.com/pkMlrPu

Request Struct Diagram: https://imgur.com/Ir2mfd2

**Lecture 107: CreateRequest Function**

_Create additional function modifier to lock down access_

Only the manager should be able to call the createRequest function, so it has to be restricted.
For this to work, a restricted() modifier is created.
