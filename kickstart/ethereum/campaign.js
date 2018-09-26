import web3 from "./web3";
import Campaign from "./build/Campaign.json";

export default address => {
  // create an instance of the campaign
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address // address that gets passed into this function
  );
};
