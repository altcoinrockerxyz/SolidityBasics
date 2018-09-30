import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import web3 from "../ethereum/web3";

class RequestRow extends Component {
  render() {
    // destructure the actual components of the table that we need (row and cell)
    const { Row, Cell } = Table;

    // destructure this.props to shorten returned values
    const { id, request } = this.props;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
