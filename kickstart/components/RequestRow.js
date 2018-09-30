import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import web3 from "../ethereum/web3";

class RequestRow extends Component {
  render() {
    // destructure the actual components of the table that we need (row and cell)
    const { Row, Cell } = Table;

    // destructure this.props to shorten returned values
    const { id, request, approversCount } = this.props;

    // L206: The total number of approvers is tied to the campaign contract,
    // NOT in individual requests
    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount} / {approversCount}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
