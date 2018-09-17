// boilerplate initialization
import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: ""
  };

  // event handler
  onSubmit = async () => {
    // pass this in to the Form tag
    event.preventDefault(); // keeps the browser from attempting to submit the form

    // get a list of available accounts
    const accounts = await web3.eth.getAccounts();

    // This is where we actually create a campaign done by importing the factory instance
    await factory.methods.createCampaign(this.state.minimumContribution).send({
      // metamask will attempt to automatically calculate
      // the amount of gas needed to run this function
      from: accounts[0] // this assumes metamask is turned on
      // and there's at least one active account
    });
  };

  render() {
    return (
      <Layout>
        <h3>Create A Campaign</h3>

        <Form onSubmit={this.onSubmit}>
          {" "}
          // make sure there's no parentheses after onSubmit
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
