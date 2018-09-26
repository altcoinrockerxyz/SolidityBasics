import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {
  // NOTE: we are concerned about one VERY PARTICULAR campaign
  static async getInitialProps(props) {
    // a separate props object of its own
    // console.log(props.query.address); // this is the token we have on the URL
    // call to the Campaign function
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    console.log(summary);

    return {
      balance: summary[0],
      minimumContribution: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    // destructure
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw funds.",
        style: { overflowWrap: "break-word" } // constrains the width for each value
      }
    ];

    return <Card.Group items={items} />;
  }

  // Lecture184: Make sure to call the renderCards function from within the render method.
  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
