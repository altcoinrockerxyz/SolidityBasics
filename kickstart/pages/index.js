import React, { Component } from "react";
import factory from "../ethereum/factory";

// we need some location to fetch the data -- call our method getDeployedCampaigns
// to do that, redefine this from a functional component to a class-based component
/**
export default () => {
  return <h1>This is the campaign list page!!!</h1>;
};
**/

// use Component base class from the react library so make sure it is imported from react at the top
class CampaignIndex extends Component {
  // define component did mount method, mark as async
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call(); // <-- call the function

    // add a console log to check if it works as expected
    console.log(campaigns);
  }

  render() {
    return <div>Campaigns Index!</div>;
  }
}

export default CampaignIndex;
