pragma solidity ^0.4.17;

// Lesson 125: Create the CampaignFactory contract

contract CampaignFactory {
    address[] public deployedCampaigns; // holds the list of all deployed campaigns

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    // add a function that returns the entire array of all deployed campaigns
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }

}

// add a call to get four details of the campaign (via Lecture 180)
contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; // keeps track of the YES votes
        mapping(address => bool) approvals; // the ones who are allowed to approve
    }

    // define a new Request array of type requests
    Request[] public requests;

    address public manager; // so everyone knows who manages the project/campaign
    uint public minimumContribution;

    mapping(address => bool) public approvers; // label variable as approvers

    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public { // initializes a memory variable
        manager = creator; // assign the contract management to the contract instance's deployer
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution); // msg.value is the amount in Wei

        approvers[msg.sender] = true; // give a True VALUE to the approver's address KEY

        approversCount++;
    }

    // require struct variables to be passed into the function
    function createRequest(string description, uint value, address recipient)
        public restricted
    {
        // use arguments to create a brand new request object
        Request memory newRequest = Request({ // use memory keyword
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    // Approving a Request
    function approveRequest(uint index) public { // pass on the index of the selected request
        Request storage request = requests[index];

        require(approvers[msg.sender]); // this gets a boolean of true if msg.sender already contributed

        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;

        request.approvalCount++;
    }

    // Finalizing a Request (specify which request we're trying to finalize)
    function finalizeRequest(uint index) public restricted { // the manager is the only one allowed to do this
        Request storage request = requests[index]; // store requests[index] into variable request (small caps)

        require(request.approvalCount > (approversCount / 2));

        require(!request.complete); // <-- check if it's false

        request.recipient.transfer(request.value);

        request.complete = true;
    }

    // Lecture 180
    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ) {
            return (
              // Campaign Balance
              // Requests
              // Minimum Contribution
              // Contributors
                this.balance,
                minimumContribution,
                requests.length,
                approversCount,
                manager // address of the manager
              );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
