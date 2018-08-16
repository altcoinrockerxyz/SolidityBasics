const path = require("path");
const solc = require("solc"); // solidity compiler module
const fs = require("fs-extra"); // node default file system manager + extra functions

// THE ENTIRE IDEA is that only the most updated codes get saved to the work directory
// STEP 1: DELETE THE BUILD FOLDER
// LOGIC to delete the entire build folder IF it exists

// declare the function
const buildPath = path.resolve(__dirname, "build"); // set directory
// MAKE SURE dirname has two underscores
// function to remove the directory and everything in it
fs.removeSync(buildPath); // the removeSync is part of the extra functions

// STEP 2: READ IN the campaign.sol file from the 'contracts' folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol"); // set directory
// pass in the campaign path and specify the encoding of that file
const source = fs.readFileSync(campaignPath, "utf8");

// STEP 3: COMPILE: Use the solidity compiler to compile everything we just pulled out of that file
const output = solc.compile(source, 1).contracts; // pull out the contracts property
// Two separate objects are going to be pulled out

// STEP 4: RECREATE THE BUILD FOLDER
fs.ensureDirSync(buildPath); // ensureDir checks to see if it exists,
// if not it will create the folder

/**
   Lecture 132: Get the output shown into the Console
   This is to ensure the code do extract the ABIs/Bytecodes
   of both the Campaign and the CampaignFactory contracts
**/
console.log(output);

// STEP 5: DO A FOR-IN  LOOP to generate separate JSON files for each contract
for (let contract in output) {
  fs.outputJsonSync(
    // write out a JSON file to some specified folder inside our directory
    // two separate arguments
    // path.resolve(buildPath, contract + ".json"), // passing in a Path to the buildPath,
    // and then specifically a file insider there that we are calling contract + .json

    // REMOVE the COLON character and replace with empty string
    path.resolve(buildPath, contract.replace(":", "") + ".json"), // string concatenation

    // write out the entire thing
    output[contract]
  );
}
