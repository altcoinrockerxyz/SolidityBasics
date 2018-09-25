// import copy of web3
import web3 from "./web3"; // get the instance we just created

// import the compiled contract (ABI) placed within the build directory
import CampaignFactory from "./build/CampaignFactory.json";

// create our contract instance
const instance = new web3.eth.Contract(
  // first argument is contract ABI
  JSON.parse(CampaignFactory.interface),

  // second argument is the address
  "0x5a3F507b01c3604B56f08472bF4fC520dCEfcc53"
);

export default instance;
