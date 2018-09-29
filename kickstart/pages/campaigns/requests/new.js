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
    recipient: "",
    loading: false,
    errorMessage: ""
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

    this.setState({ loading: true, errorMessage: "" }); // Lecture 198
    // 2. Setup a Try-Catch
    try {
      const accounts = await web3.eth.getAccounts();

      // make sure the passed in value is in wei
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });

      // L198: send back to list of requests
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message.split("\n")[0] }); // L198
    }

    this.setState({ loading: false });
    // 3. Call a function on the campaign
  };

  // three separate form fields
  // define onSubmit handler
  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
