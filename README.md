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

**Lecture 108: Creating Struct Instances**

Start work on createRequest() function and create a new request with key value pairs (description, value, recipient, boolean)

**Lecture 109: Instance Creation Syntax**

_Breaking down the initialized Request struct_

- Get ready to create a new variable that will contain a 'Request'
- The variable's name is 'newRequest'
- equal to Request({}) <-- Create a new instance of a Request and store the values from the left side of the equation

**Lecture 110: Storage and Memory**

_Two separate topics in Solidity_

- Sometimes references where our contract stores Data
- Sometimes references how our solidity variables store values

Screenshots:
https://imgur.com/azVCOQC
https://imgur.com/3E1zsoL

**Lecture 111: How Solidity Variables Reference Values**

_storage keyword_ changes the way in which the new variable works -- it makes the new variable point directly to the exact same location where the numbers variable (right side of the equation) is pointing at.

Screenshot: https://imgur.com/jd7hgKi

_memory keyword_ will require some additional steps

- If used, we will copy the values from the Storaged variable and store them on Memory.
- This meant modifications on values at the Memory location will not affect values on the Storage location.

Screenshots:
https://imgur.com/AYGO71J
https://imgur.com/ynOR0Iu
https://imgur.com/uWIphKl

**Lecture 112: Voting System Requirements**

_Moving on to approveRequest() function_

Two Requirements:

1.  Make sure a single contributor cannot vote multiple times on any spending request
2.  Make sure that whatever voting system we come out with, it should be resilient for many many different contributors/approvers of the campaign (i.e. hundreds or thousands of approvers)

**Lecture 113: The Wrong Voting System (GOTCHA)**

_The Wrong Way of Creating a Voting System_

In order to know wrongly designed way to avoid such pitfall, because it's a very bad approach inside a Solidity contract

One function with two subroutines was presented - approveRequest(). It contains a for loop that checks if isApprover = true, and another for loop to check if isApprover has not voted yet.

**Lecture 114: Issues with Arrays**

_It all boils down to gas cost_

Each subroutine will cost gas. Multiply that with the assumed number of users / contributors / voters and it could eventually cost hundreds of millions of gas -- thus a tremendous amount of money.

Instructor's Recommendation:

_Anytime you start working on your own personal contract, avoid working with arrays whenever possible._

**Lecture 115: Mappings vs Arrays**

_Replace subroutines that uses arrays by subroutines that use mappings._

Mapping - A collection of key-value pairs.

_Why mapping will solve our issue_

It all comes down to the search time for each of these data structures.

| Type    | Search Time Algo     |
| ------- | -------------------- |
| Array   | Linear Time Search   |
| Mapping | Constant Time Search |

Linear Time - For every additional record that we add to the array, it will take a slightly larger amount of time; the size of array dictates how long the search is going to take.

Constant Time - No matter how many pieces of data we are storing inside the mapping, it's always gonna take the exact same amount of time to execute the search. It doesn't matter how many people enter into our contract, the time required to query for one entry will always be constant (i.e. 1sec for 1 contributor, 10 contributors, 10,000 contributors).

**Lecture 116: Basics of Mappings**

key: value

_Example JavaScript Code for Key-Value Pairs_

const spanishNumbers = {
one: 'uno',
two: 'dos',
three: 'tres'
};

_Sample Methods to Manipulate the Object (SpanishColors)_

Object.keys(spanishNumbers); <- This will show all the keys that the object hash
Object.values(spanishNumbers); <- Spits out all the values of all the keys
spanishNumbers["one"]; <-- returns the value at the specified key
If the key doesn't exist, then the value will be 'undefined'
spanishNumbers["afw34l"] === undefined; <-- this will result to true

_With mappings in Solidity, we are working with a classic data structure called a Hash table_

GOTCHA
Keys are not stored with mappings: https://imgur.com/1mtIvrH
_All we can do is Do a Lookup for single values_
If the Key being looked up doesn't exist, we get back a default empty string value
_The returned value depends on the value type (i.e. whether strings or integers or some others)_

Final Diagram of the Campaign Contract: https://imgur.com/IKgkrhB

approvers Variable will use key-value pair mappings instead of arrays.
_Addresses will be the Keys, while a Boolean (True or False) will become the Value_

We'll know whether or not someone has donated to our campaign by looking up their addresses inside this mapping, and if that look up returns TRUE, then it means that address must be part of the group.

An _approvals mapping_ will also be added to the Request Struct - a mapping that tracks who has voted on a particular request.

To track whether or not it's a YES or NO, a separate counter (approvalCount) that counts the number of people that said YES.

MY NOTE: Addresses of contributors ARE NOT stored on a database of entries created from the contract. The VALUES are the ones stored (BOOL T or F), and for some unknown reason (for now), they are mapped to the actual addresses used.

**Lecture 117: Refactoring to Mappings**

Replace codes that use arrays by codes that use mappings by modifying lines 19-20, and line 38.

https://imgur.com/Ie3ZN0h
https://imgur.com/57pKwhg
https://imgur.com/E1DiCmK

**Lecture 118: Refactoring Request Structs**

_Update the request struct by adding the mapping called approvals and the approvalCount._

uint approvalCount;
mapping(address => bool) approvals; <- a better identifier (instead of approvals) could be used. approvers cannot be used because it's already used on another mapping

**Lecture 119: More on Struct Initialization**

1.  Only VALUE TYPES are required to be initialized. Mappings are REFERENCE TYPES so they are not required to be initialized.

2.  approvalCount number exists because we need to record the minimum number of approvers who voted YES.

**Lecture 120: Approving a Request**

To approve a specific funding request.

_To be able to select which request is being sought,_ the index of the request from the Request[] array will have to be passed on to the approveRequest() function. It is a constant time lookup because we will not be iterating on all the contents of the array. It targets a specific funding request.

**Lecture 121: Testing Request Approvals**

_NOTE:_ Make sure to enclose each parameters in quotation marks before submitting a _createRequest_ function.

**Lecture 122: Finalizing A Request**

**Lecture 123: Last Remix Test**

**Lecture 124: Thinking About Deployment**

_How to deploy the same contract multiple times or instances_

For each instance deployed, there's one unique address. _Each of these addresses are completely separated from each other_

Mockup: https://imgur.com/mF35qnt

_NOTE:_ There has to be a way to record the contract address for each newly created campaign. This has to do with the functionality of the _Create Campaign_ button.

_Solution 1:_ exposes the source code to the deployer and has the risk of modification by malicious users.

_Solution 2:_ have the risk of requiring a huge payload on the deployment costs (each deployed contract will cost ethers)

**Lecture 125: Solution to the Deployment**

_Create a Factory Contract:_ To create new instances of the Campaign contract.

- Users will invoke the Campaign Factory to create a new instance of the Campaign Contract fit for their Purpose
- Users will shoulder the cost (via web3/metamask)
- All campaign contract instances will be recorded within the Campaign Factory contract
- Anyone can check the list of campaigns

Diagrams:

https://imgur.com/wdW4rhh
https://imgur.com/r2v0YqO
https://imgur.com/mEW2wvq

**Lecture 126: Adding a Campaign Factory**

_Contains One Variable_

deployedCampaigns[] - An array of addresses of all the deployed campaigns.

_Contains Two Functions_

createCampaign - Deploys a new instance of a Campaign and stores the resulting address back inside the deployedCampaigns[] array.
getDeployedCampaigns - Returns a list of all deployed campaigns.

Diagram:

https://imgur.com/AaSxUe5

**Lecture 127: Testing the Factory**

Only one factory will ever be deployed, but unlimited number of Campaign instances.
Remix allows interaction with various campaigns. To do so:

1.  Get the campaign address
2.  Select Campaign from the drop down menu we used to select CampaignFactory
3.  Paste the campaign address into the form field that says _Load contract from Address_

Screenshots:
https://imgur.com/OHsBzkW
https://imgur.com/nVPfseE

**Lecture 128 (Section 6-1): Project Setup**

- Go to root directory of github on local machine
- Create a new directory called kickstart (mkdir)
- Run _npm init_ and answer yes to last question prompt
- Run _npm install --save ganache-cli mocha solc fs-extra web3@1.0.0-beta.26_

**Lecture 129: Directory Structure**

_Creation of different files and folders inside kickstart directory_

Recap: The lottery project comprised of:

- The compile.js Script
- The deploy.js Script
- The contracts directory
- The test directory

_Everything is in the root project directory_

FOR KICKSTART PROJECT: We'll use a lot of different project files and folders

- Some is going to be related to the Eth side of the app
- Others are related entirely to the web side of things
- Place all ethereum-related codes in its own directory (ethereum)
- Create a contracts folder, compile.js and deploy.js files within the ethereum directory
- Create a Campaign.sol file within the contracts folder

**Lecture 130: A Better Compile Script**

Spit out two files (Compiled Campaign and Compiled CampaignFactory) once the source code is compiled, save them to a project directory

Create a build folder where all compiled contracts into this folder

Steps in creating compile.js

- Delete any existing _build_ folder (in case modifications were done)
- Read _Campaign.sol_ from the _contracts_ directory
- Compile both contracts with solidity compiler (will output two separate files)
- Write output to the _build_ directory as JSON files

_This way, anytime in the future when we need to access the ABI (interface or bytecode of our contracts), we can read them from the build directory without the need to recompile any of our contracts._

**Lecture 131: Single Run Compilation**

Source code for the compile.js that does the following:

1.  Remove the Build directory and contents if they already exist
2.  Read the Campaign.sol source
3.  Compile the source code and pull out the _contracts_ property
4.  Re-generate the BUILD folder
5.  Do a FOR-LOOP to extract the contracts and store into the Build folder
6.  Run _node compile.js_

**Lecture 132: More on Compile**

_Explanation for the compile.js source code_

NOTES:

- Spit out the compiled source code into the Terminal window via the _console.log(output);_ code.
- A _For-In Loop_ is used to iterate over the keys of an object.
  _We are iterating over both the CampaignFactory and the Campaign contracts_
- The COLON (:) in the filename (i.e. :Campaign.json) exists because it exists on the key. The KEYS are the ones generated upon running compile.js and shown in the console output
- The .json extension is appended so that we very clearly label what type of file it is.
- The second argument to the outputJsonSync --> _output[contract]_ is the actual contents that we want to write to the generated JSON file(s).
- Remove the COLON from the generated files using concatenation syntax.

**Lecture 133: Test File Setup**

Write some of the tests

1.  Create a new folder at the root project folder called TEST. This is so all tests (whether ethereum or web3 or others) go into this folder.
2.  Open up the test folder and create the Campaign.test.js test file.

**Lecture 134: Creating Campaign Instances**

- Finish up the beforeEach helper
- Code the contents of the Campaign.test.js file
- Take note on how codes are organized for when contracts are deployed, as compared to when deployed contracts are called

**Lecture 141: Deployment**

Create a deploy.js file from within the ethereum folder.

**Lecture 142: Refactoring Deployment**

This takes into account the deployment of the precompiled campaignFactory.JSON contract. It focuses on the creation of deploy.js and the actual deployment by running "node deploy.js" at the terminal.

STEP 1:
Make sure we are in the kickstart directory.
Run 'npm install --save truffle-hdwallet-provider'

STEP 2:
Import interface and bytecode from the built factory JSON

- Make sure to be inside the ethereum directory (from within the kickstart folder)
- Run node deploy.js

_NOTES:_

We are only concerned with doing deployment of the campaignFactory (from the compiled version/JSON) so we make sure that our users have the ability to create new instances of a campaign through this factory.

The compiled Campaign (JSON) on the other hand is needed once people start creating instances of campaigns and we need to use web3 inside our web app to interact with those deployed instances of a campaign. We will eventually need the ABI out of it so that we can work with those instances that have been deployed.

_..attempting to deploy from account 0xa0D179f21B5F22a9b4ac54bCbd2FeCc50Ba0a00F_

_..contract deployed to 0x2e75bB98d523ae9329041b45F25AEAb5e1e59E57_

**Lecture 143: App Mockups**

How to use Ethereum with other libraries (i.e. React, Node JS) to build an actual application.

Landing Page: https://imgur.com/7No2oSx
Create a Campaign Page: https://imgur.com/T7xrdpL
Campaign Details Page: https://imgur.com/QBjDqkX
List of Pending Requests per Campaign: https://imgur.com/XQ52sDx
Create Request Page: https://imgur.com/BckUbPQ
Table of Routes how to navigate to various pages: https://imgur.com/fdFKRfw

| Path                           | We should show...                                       |
| ------------------------------ | ------------------------------------------------------- |
| /                              | List of Campaigns                                       |
| /campaigns/new                 | Form to make a campaign                                 |
| /campaigns/0x8147              | Campaign details for campaign at address 0x8147         |
| /campaigns/0x8147/requests     | List of requests for campaign at address 0x8147         |
| /campaigns/0x8147/requests/new | Form to create a request for campaign at address 0x8147 |

**Lecture 144: CRA vs Next**

_RECAP: create-react-app helps create a boilerplate setup_

It doesn't include anything to do with navigation, data loading or other tools. Since we will need more features, we will use another tool called _Next.js_.

Next.js takes React and builds a bunch of functionality around it. A lot of fancy features are included out of the box i.e.:

- Routing - taking a URL and deciding (from that) what content to show to the user.
- Built-in Support for Server-side Rendering
- Hot module reload, updates code inside app a little bit more easily (for devs)
- Great support for showing multiple pages to the user
- https://imgur.com/J0gdYdl
- https://github.com/zeit/next.js

**Lecture 145: How Next Works**

Next's Pages Architecture

- How to organize code in Next: https://imgur.com/lZ5QIy4
- .next directory will specifically look for a directory called 'pages'
- Inside the pages directory, we will create a bunch of react components.
- Every single file within the pages folder will automatically be turned into a webpage that we can visit inside of our application. https://imgur.com/91XVAN0

Run _npm install --save next@4.1.4 react react-dom_ to install required tools and packages

**Lecture 146: Basics of Next Routing**

Step 1: On the root directory, create a folder called 'pages'
Step 2: Create two files - newcampaign.js and show.js
Step 3: To startup Next.js, we have to create a new script inside of our package.json file and by adding the line "dev": "next dev" on the "scripts" are (where "test": "mocha" is located) and the two have to be comma delimited
Step 4: Build to verify that we can visit the two pages (on Terminal command line, run _npm run dev_ from the kickstarter root directory)
Step 5: Access http://localhost:3000 and add /show or /showcampaign to generate the html content of the two sample pages

**Lecture 147: Root Routes**

To have a Root Route page, make sure there is an index.js

TODOs for the Campaign List Page

1.  Configure web3 with a Provider from metamask
2.  Tell web3 that a deployed copy of the 'CampaignFactory' exists
3.  Use Factory instance to retrieve a list of deployed campaigns
4.  Use React to show something about each campaign

**Lecture 148: CampaignFactory Instance**

Create a web3.js file inside the ethereum directory
Create a factory.js file inside the ethereum directory

**Lecture 149: Getting a Test Campaign**

Try out and access the pre-deployed CampagignFactory contract via Remix and create a Campaign.
https://imgur.com/nsa7acg
https://imgur.com/JTHmUy2

**Lecture 150: Fetching Deployed Campaigns**

Clicking the Get Deployed Campaign button via Remix should show all deployed campaigns. (Step 3 of ToDo List).

Open index.js file to get a list of all active campaigns.
Use the factory instance to get a list of all campaigns.
Step 1: Import Factory instance.

NOTE: _Whenever Next imports a file from the pages directory, it's always going to expect that the file exports a React component. Not enough to define a component inside each file, but the export has to also be exported or else there will be an error._

Expected Error Message: Window is not defined

**Lecture 151: Why Next.JS**

Next.JS makes use of server-side rendering. Our content gets shown much more quickly because the Next Server will render it before sending to browser.
https://imgur.com/Xq7prTq

_NOTE:_ Window (at web3.js) is a global variable that's available only inside the browser.
It is not available on NodeJS, which is where our server is currently running.
Whenever Next.JS loads up our code in an intent to render our react app on the server,
that window variable is not defined.

In short, we cannot directly access the window variable (on web3.js) now that we are using Next.JS.

_The big idea behind using Next.JS is this -_
When our code is taken and rendered on the Next server, on the next server, we are going to reach out to the Ethereum network and do some initial calls (data fetching, i.e. a list of our campaigns, how many votes, requests). We are gonna do (execute) all of those requests from our server. That means it doesn't matter if our viewers are using or not using Metamask.

**Lecture 152: Server vs Client Web3 Instances**

Rework web3.js to contain a conditional statement that performs different actions depending on whether the client is accessing using a browser with Metamask installed, or if not, then use a server-side process via INFURA service. This removes the error message shown on the previous lecture.

**Lecture 153: GetInitialProps Function**

How to take the queried data and present it on the screen.

_TAKE NOTE:_ We used componentDidMount() function, but NEXT.JS introduces one extra requirement around data loading because it doesn't execute componentDidMount() while working on the server-side. Instead, use getInitialProps() - used exclusively by NEXT.

https://imgur.com/a9Ez6vh

After processing getInitialProps, it will show up an initial data then take it and provide it to the actual CampaignIndex component as props on the server. This will be rendered on the server, then it will take the HTML component that is produced and send it down to the browser.

To test exclusive rendering from the server, modify the JavaScript settings of the browser and set it to 'Always Block on the Site'.

**Lecture 154: Semantic UI React**

Semantic UI React is a component kit (library) that comes with a bunch of easily accessible pre-created components. It comes with styling already placed on them (but requires the stylesheet to be installed as well).

_Semantic UI React allows us to leverage its built in components so (as much as possible) we do not have to do any manual styling_

https://react.semantic-ui.com

https://imgur.com/ZuUzHLk

To install:

1.  Stop the running server by pressing Ctrl C
2.  Run _npm install --save semantic-ui-react_

**Lecture 155: Card Group Setup**

By default, installing Semantic UI give us access to a bunch of components (via pre-created codes). It doesn't include the CSS styling for them. One additional step is needed to actually include CSS (Semantic UI CSS).

To do so, either add a linked stylesheet or install semantic-ui-css (_npm install --save semantic-ui-css_)

Use the following as a layout guide
https://react.semantic-ui.com/views/card/#types-group-props

**Lecture 156: Rendering Card Groups**

Create a new function renderCampaigns() for use to create this card group component.
Replace the output html and value query from referencing just the first value in the array (this.props.campaigns[0]), into a reference for all the values within the array as queried within the renderCampaigns() function.

**Lecture 157: Adding CSS**

NEXT.JS does not have support for CSS modules as recommended in Semantic UI React usage instructions. To use the CSS, a very temporary solution, copy the link tag and add directly to the render method.

**Lecture 158: Adding a Button**

https://react.semantic-ui.com/elements/button/#types-labeled-icon-shorthand

**Lecture 159: The Need for a Layout**

- Add the Open Campaigns title above the list of campaigns.
- Create a single Header component that could be used across all the different pages within the application without typing it redundantly in all the pages.

_Next.JS makes it challenging to inject common react component into other pages, but it can be done._

To do this,

1.  Create a separate directory called _components_ where we can place all components we can use in the future.
2.  Create Layout.js to house some very common elements we want to display in different parts of the application (i.e. header, footer, sidebar, navigation, etc)

https://imgur.com/4M6ISaR

**Lecture 160: The Layout Component**

Layout.js - is a reusable component and not something that a user should be able to visit on its own.. This is why it is placed on a different folder.

_All the pages we make (i.e. index.js or show.js), we will always place the <Layout> component._

**Lecture 161: Assembling a Header**

Check out React Semantic-UI documentation and look for Collections > Menu, then on the right hand side of Types, there's a quick link to Content > Menu

Use another file within components directory and call it Header.js in order to keep each file small and easy to understand.

**Lecture 162: Constraining Content Width**

On Semantic-UI documentation, Go to Elements > Container component.
Purpose of container is to limit the content to a max width.

**Lecture 163: Two Column Layout**

_Render the button before the list of campaigns is rendered_

**Lecture 164: Nested Routing**

A separate page that will enable users to create campaigns of their own.

To create a new page, create a new file inside the pages directory.
https://imgur.com/yIaMV7S

Routing for distinct URLs: https://imgur.com/2C8cAoK

To get a nested routing URL, create a folder within pages.

**Lecture 165: Final CSS Fix**

Move link tag to CSS into a place that can be accessed by all routed pages.

**Lecture 166: Form Creation**

Form that allows the user to add a new campaign.

We make use the a Semantic-UI Form component represented as <Form></Form> (not to be mixed with HTML <form> tag) and <Form.Field> component.

**Lecture 167: Input Change Handlers**

Use (import) the Input component of semantic-ui-react.

**Lecture 168: Form Submittal**

Setup an event handler inside of new.js component

**Lecture 169: Testing Submittal**

There is a need for an error handler (notification) so users know if they are submitting the right thing.

**Lecture 170: Form Error Handling**

Semantic-UI documentation: Collections > Message > Negative/Error

**Lecture 171: Button Spinners**

Semantic UI documentation > Button > States > Loading
https://imgur.com/fgQWtFV

**Lecture 172: Routing Issues**

_NEXT JS has a problem with its routing system_

The next three routes we are to create will make use of a wildcard info or variable in the URL.
This aspect is not supported (by default) by Next JS. For this we need to use a helper module found at:

https://github.com/fridays/next-routes

Run npm install next-routes --save
Create routes.js

**Lecture 173: Next Routes Setup**

This introduces Server.js and Routes.js so that a user could be redirected upon creation of a new campaign.

https://imgur.com/v50cdZ8
server.js - Used to manually boot up our NEXT application and specifically tell it to use our routes.js file.

**Lecture 174: Automatic Navigation**

Getting access to our Router object from our Routes file.

**Lecture 175: Header Navigation**

Import the Link helper on the Header.js file for use on the html tags for navigation, replacing the Menu.Item tags.

**Lecture 176: Routing to Campaigns**

The Link Tag is what gives us the initial navigation functionality, while the anchor tag is what allows to to do right-clicks-open-in-new-tab stuff.. and inside the anchor tag, we could use anything we need.

Use back-tick when referencing a dynamically generated link (i.e. when accessing each campaign using the campaign's contract address).

**Lecture 177: Restart the Server**
Execute npm run dev

**Lecture 178: Route Mappings**

Add a routing rule to our Routes.js file.

Create the component (pages/campaigns/show.js file) before setting up the Routes.js

_Note:_ Adding the wildcard route breaks the existing link (i.e. campaigns/new) so there is a need to specify that link prior to placing a wildcard route.

**Lecture 179: Planning CampaignShow**

Mockup: https://imgur.com/m2LmLmY

Show Header Nav
Show Four (4) Campaign Details
-- Campaign Balance
-- Pending Requests
-- Minimum Contribution
-- Contributors
_Create a getSummary helper that does one call, instead of four, to get the four details_

To do so, we need to change some of the existing codes.

**Lecture 180: Redeploying CampaignFactory**

Create a getSummary and getRequestsCount functions then redeploy the application

Run compile and deploy

_attempting to deploy from account 0xa0D179f21B5F22a9b4ac54bCbd2FeCc50Ba0a00F_

_Contract deployed to 0x5a3F507b01c3604B56f08472bF4fC520dCEfcc53_

**Lecture 181: CampaignShow's getInitialProps**

Update factory.js file with the new contract address
console.log doesn't immediately show the result on the Dev Tool area of the browser, but shows it on the Terminal window. To have the result shown on the Dev Tool window, we will have to click on the home link and then click again on the campaign.

**Lecture 182: Accessing a Campaign**

Create a function that would receive an address (i.e. the result of props.query.address), then use that address to create a new contract and then return it to the function. Create a file called campaign.js and place within the ethereum folder. Import it on show.js (line 3), then modify the codes (lines 11 to 17).

**Lecture 183: Summary Translation Layer**

The result may look like an array, but it is NOT. It is an Object.

_Anytime that we call a function from a contract that returns multiple values, we get back an Object - NOT an array._

Next step -> Make sure that we can _return_ the values separately from within the _Show dot JS_ file. To present each value found within the Object, we will have to represent the Object in the same way values in an Array are shown (by using square brackets '[]').

**Lecture 184: Custom Card Croups**

Within CampaignShow component (inside show.js), create a renderCards() method to show up each Object on its own box using Card View.

**Lecture 185: One Card Per Property**

Use web3 library to convert values from wei into ether.

**Lecture 186: The Contribute Form**

Make the contribute form available in various pages by making it into a generally accessible component (Use Semantic UI components).

**Lecture 187: Grid Layouts**

_show.js lines 86 to 92 and import Grid component at the boilerplate header_

**Lecture 188: Form State**

Anytime a user inputs a valid value on the Contribute form, the Contribute function gets executed. Store input value unto our State Object.

**Lecture 189: Communicating the Campaign Address**

_How to pass the campaign address into the ContributeForm component._

Note: getInitialProps is not a part of our actual component instance. So even though getInitialProps knows about the campaign address, the rest of the methods inside show.js -- which actually belong to the component instance -- don't know about the address.. that's why we have to specifically _return_ the address as part of all the returned Object values.

This process allows the ContributeForm.js to have access to this.props.address variable.

**Lecture 190: Making a Contribution**

The campaign instance is now available inside our onSubmit function. Next thing to do is to get a list of our accounts and call a contribute function on our campaign.

Note: Anytime we want to call a function, always WRAP IT on a Try-Catch statement. This makes sure we handle any message appropriately.

**Lecture 191: Refreshing Contract Data**

Objective: To automatically refresh a component (or the showCampaign method) and return the summary again right after someone contributed.

To do so, we have to make use of our _router object_ to just refresh the route we are currently looking at.

**Lecture 192: Spinners and Error Handlers**

Add the spinner property on the Button, and the Error Handler Message via the catch(err)

**Lecture 193: Listing Requests**

Work on the View Requests Button
Define the View Requests route from within the pages/campaigns/requests directory (create it)
Create two files within requests directory:

- File 1: index.js to show a list of all requests

**Lecture 194: Grids vs Columns**

Usage of the <Grid.Row> tag

**Lecture 195: More Routing**

View Requests Mockup: https://imgur.com/d5vxdpD
Add Requests Form: https://imgur.com/uhnW2am

_NOTE: Restart server whenever we change our routes files_

**Lecture 196: Request Creation Form**

Sort out the new.js file within the requests folder so it could accept input values and pass them unto the contract address being viewed by the user.

**Lecture 197: Creating a Request**

Sort out the onSubmit function within campaigns/requests/new.js to pass on the three inputs via the Create form.

**Lecture 198: Form Polish**

Add Error Message handler and Button spinner.
Add a Link Back to List of Requests.

**Lecture 199: Creating a Request**

Create a new request by using the live form.

**Lecture 200: Requests One by One**

View Requests Mockup: https://imgur.com/d5vxdpD

An Add Request button at the top right area
A list of all requests in tabulated (struct) form
A Counter of all existing requests at the bottom left area

_PROBLEM: Solidity do not currently have support for returning Arrays of Structs_

We need to do ONE CALL to get all requests

1.  Get the total number of requests, and
2.  retrieve them one-by-one (via a loop)
