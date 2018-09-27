import React, { Component } from "react";
import Layout from "../../../components/Layout"; // Lecture 195
import { Button } from "semantic-ui-react"; // Lecture 195
import { Link } from "../../../routes"; // Link helper via Lecture 195

// List Requests
class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address }; // ES2015 syntax for address:address
  }
  render() {
    return (
      <Layout>
        <h3>Requests List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Requests</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
