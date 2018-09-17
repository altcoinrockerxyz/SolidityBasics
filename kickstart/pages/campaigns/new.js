// boilerplate initialization
import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: ""
  };

  // event handler
  onSubmit = async () => {
    // pass this in to the Form tag
    event.preventDefault(); // keeps the browser from attempting to submit the form

    try {
      // get a list of available accounts
      const accounts = await web3.eth.getAccounts();

      // This is where we actually create a campaign done by importing the factory instance
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          // metamask will attempt to automatically calculate
          // the amount of gas needed to run this function
          from: accounts[0] // this assumes metamask is turned on
          // and there's at least one active account
        });
    } catch (err) {
      // err is a thrown variable
      this.setState({ errorMessage: err.message.split("\n")[0] });
    }
  };

  // make sure there's no parentheses after this.onSubmit
  // a condition to select when to show error message
  // Two-exclamation points - first one takes the value
  // and flip it into its opposite value into Boolean form
  // the second flips it into its opposite value (making it true)
  render() {
    return (
      <Layout>
        <h3>Create A Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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

          <Message error header="Ooops!" content={this.state.errorMessage} />
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
