import React, { Component } from "react"; // boilerplate components
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    value: "",
    // Lecture 192: Add two additional values
    errorMessage: "",
    loading: false
  };

  // make the onSubmit function
  onSubmit = async event => {
    event.preventDefault(); // keep the form from attempting to submit itself

    // Lecture 189
    // all the same exact logic we did on the last form
    // loading spinner
    // take campaign contract and attempt to send money to it.

    // campaign is Campaign with passed in address
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: "" }); // Lecture 192

    try {
      const accounts = await web3.eth.getAccounts(); // place async at event on onSubmit
      await campaign.methods.contribute().send({
        // call the contribute function
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether") // value will be entered in ether but we have to convert to wei
      });

      // Lecture 191: Refresh Pages, Use ES2015 template string (back ticks),
      // Pass in the URL of the current page we are looking at
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message.split("\n")[0] });
    }

    // after everything occurs, turn our loading flag off no matter what
    // reset the value of the contribution amount at the same time
    this.setState({ loading: false, value: "" });
  };

  // no () at onSubmit within the Form tag, we dont wanna call it at render time
  // but a reference to the function so we can call it sometime in the future
  // Lecture 192: pass in the loading flag, for error message, we
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Ooops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
