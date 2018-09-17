import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";

// we need some location to fetch the data -- call our method getDeployedCampaigns
// to do that, redefine this from a functional component to a class-based component
/**
export default () => {
  return <h1>This is the campaign list page!!!</h1>;
};
**/

// use Component base class from the react library so make sure it is imported from react at the top
class CampaignIndex extends Component {
  // define the getInitialProps function
  // static keyword allows it to be called without the need to create an instance
  // [i.e. const campaignIndex = new CampaignIndex()]
  // we skip rendering to avoid costly additional processing
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call(); // <-- call the function

    // return { campaigns: campaigns };
    // ES2015 code, we can further condense
    return { campaigns };
  }
  /** define component did mount method, mark as async
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call(); // <-- call the function

    // add a console log to check if it works as expected
    console.log(campaigns);
  } **/

  renderCampaigns() {
    // iterate
    const items = this.props.campaigns.map(address => {
      // array function that one individual object for each card
      return {
        header: address,
        description: <a href=".">View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  /**
Initial output
Campaigns Index! Here is a list of campaigns: {this.props.campaigns[0]}

Lecture 157: Paste the link tag for semantic-UI CSS
**/

  /** Lecture 160

All JSX (i.e. html contents) inside the <Layout></Layout> component
will get passed to the Layout component as a Property called _children_
thus it becomes _props.children_

This means that in all the pages we make (i.e. index.js or show.js),
we will always place the <Layout> component.

NOTE: To place Button to right side, we add one property to it (floated="right")

**/
  render() {
    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          />
          <h3>Open Campaigns</h3>
          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
