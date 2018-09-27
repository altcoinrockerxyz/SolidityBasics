import React, { Component } from "react"; // Lecture 195
import { Form, Button, Message, Input } from "semantic-ui-react"; // Lecture 196
import Campaign from "../../../ethereum/campaign"; // L196
import web3 from "../../../ethereum/web3"; // L196
import { Link, Router } from "../../../routes"; // L196
import Layout from "../../../components/Layout";

// Add Request form
class RequestNew extends Component {
  // initialize our state objects
  state = {
    value: "",
    description: "",
    recipient: ""
  };

  // get access to the address the user is currently looking at inside the URL
  // by defining getInitialProps
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  // Lecture 197: Wire Up onSubmit function to the corresponding form via render()
  onSubmit = async event => {
    event.preventDefault();

    // 1. Get a reference to our campaign instacne by using our address
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;
    // 2. Setup a Try-Catch
    try {
      const accounts = await web3.eth.getAccounts();

      // make sure the passed in value is in wei
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
    } catch (err) {}

    // 3. Call a function on the campaign
  };

  // three separate form fields
  // define onSubmit handler
  render() {
    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
