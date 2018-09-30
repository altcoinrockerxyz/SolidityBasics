import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  // L207: Call approve request based on the index of the caller
  // There is a need to access the campaign object (contract)
  // To do that, import campaign and create a campaign instance
  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    // get a list of all accounts need for line 16
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  // L208
  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  };

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
        <Cell>
          <Button color="green" basic onClick={this.onApprove}>
            Approve
          </Button>
        </Cell>
        <Cell>
          <Button color="teal" basic onClick={this.onFinalize}>
            Finalize
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
