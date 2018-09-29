import React, { Component } from "react";
import Layout from "../../../components/Layout"; // Lecture 195
import { Button } from "semantic-ui-react"; // Lecture 195
import { Link } from "../../../routes"; // Link helper via Lecture 195
import Campaign from "../../../ethereum/campaign";

// List Requests
class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    // Lecture 201: Get hold of campaign contract, then total number of requests then loop
    // Step 1: Import from our eth campaign js
    const campaign = Campaign(address);

    // Step 2: Issue a call to getRequestsCount
    const requestCount = await campaign.methods.getRequestsCount().call();

    // NOTE: L202: Passed value to requestCount ends up as a String
    // so it needs a parseInt() to work

    // Step 3: Rather than looping through every individual request
    // We will issue all the calls in one go and wait for them all to be resolved
    // By using Promise.all helper (Requires some fancy JS)

    const requests = await Promise.all(
      Array(parseInt(requestCount)) // L202 parseInt is needed to convert String to Number
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    console.log(requests);

    return { address, requests, requestCount }; // ES2015 syntax for address:address
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
