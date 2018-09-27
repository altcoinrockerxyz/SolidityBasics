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

  // three separate form fields
  render() {
    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form>
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
