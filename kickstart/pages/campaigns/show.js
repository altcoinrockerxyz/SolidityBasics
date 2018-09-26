import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3"; // Lecture 185
import ContributeForm from "../../components/ContributeForm"; // Lecture 186

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
        // card for manager address
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw funds.",
        style: { overflowWrap: "break-word" } // constrains the width for each value
      },
      {
        // card for minimum contribution
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver"
      },
      {
        // card for requestsCount
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw funds from the contract. Requests must be approved by the approvers."
      },
      {
        // card for approversCount
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign."
      },
      {
        // card for current balance (donations)
        header: web3.utils.fromWei(balance, "ether"), // convert balance into ether
        meta: "Campaign Balance (ether)",
        description:
          "The Balance shows how much money this campaign has left to spend."
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
        <ContributeForm />
      </Layout>
    );
  }
}

export default CampaignShow;
