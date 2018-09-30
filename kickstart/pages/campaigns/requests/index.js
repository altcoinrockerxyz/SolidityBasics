import React, { Component } from "react";
import Layout from "../../../components/Layout"; // Lecture 195
import { Button, Table } from "semantic-ui-react"; // Lecture 195, 203
import { Link } from "../../../routes"; // Link helper via Lecture 195
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

// List Requests
class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    // Lecture 201: Get hold of campaign contract, then total number of requests then loop
    // Step 1: Import from our eth campaign js
    const campaign = Campaign(address);

    // Step 2: Issue a call to getRequestsCount
    const requestCount = await campaign.methods.getRequestsCount().call();

    // L206: Reuse this getInitialProps function for RequestRow
    // by making an additional call to pull out the total number of approvers
    const approversCount = await campaign.methods.approversCount().call();

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

    // L206: Pass the value into the object that eventually
    // gets added to the props of our component
    return { address, requests, requestCount, approversCount }; // ES2015 syntax for address:address
  }

  // L204: create a helper method to iterate over our list of requests, and for each, return a request row.
  renderRows() {
    return this.props.requests.map((request, index) => {
      // L206: Make sure the approversCount gets communicated
      // from the over-all component down to request row
      return (
        <RequestRow
          key={index} // NOTE: part of React, pass a key whenever we are rendering a list of components
          id={index} // The value to be placed as a value's ID
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      ); // return one new requestRow with a couple of properties (props)
    });
  }
  render() {
    // L203: use ES2015 destructuring to shorten the process of creating table tags
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3>Requests List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Requests</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount (ETH)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default RequestIndex;
