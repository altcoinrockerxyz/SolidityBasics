const path = require('path'); // standard required modules
const fs = require('fs'); // standard required modules
const solc = require('solc'); // require solidity compiler to run line 12


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol'); // pass three portions of the path
// this is so it works in either windows or unix-based systems

const source = fs.readFileSync(inboxPath, 'utf8'); // read in the contents of the file

// write the actual compile statement using Solidity compiler
// console.log(solc.compile(source, 1));
// module.exports = solc.compile(source, 1);
// pass in the source code and number of different contracts we are attempting to compile
// wrap in console.log() to show what's happening behind the scene

// whenever we compile, make sure it could be accessed by other files
// immediately get access to compiled source code
// we only need to pull out the Inbox property
module.exports = solc.compile(source, 1).contracts[':Inbox'];
// this gives direct access to just the bytecode and interface property
