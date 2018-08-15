pragma solidity ^0.4.17;

contract Campaign {
    // define the struct at the very top of the contract
    // it does not create an instance of the Request struct bec it's just a definition
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

    // define a mapping for approvers
    mapping(address => bool) public approvers; // label variable as approvers

    // Lecture 122: Add a new integer that counts the number of approvers
    uint public approversCount;

    // create a new modifier to restrict access to certain functions
    modifier restricted() {
        require(msg.sender == manager);
        _; // paste all other codes within the function that used this modifier
    }

    function Campaign(uint minimum) public { // initializes a memory variable
        manager = msg.sender; // assign the contract management to the contract deployer
        minimumContribution = minimum;
    }

    function contribute() public payable {
        // payable keyword allows function to accept money
        // make sure the approriate amount of money is sent
        require(msg.value >= minimumContribution); // msg.value is the amount in Wei

        // approvers.push(msg.sender); // push is a method only available to arrays, not mappings
        // refactor to work with mappings rather than arrays

        // add the sender address (Key) to the mapping and give it a boolean value of TRUE
        // syntax similar to JavaScript objects
        approvers[msg.sender] = true; // give a True VALUE to the approver's address KEY

        // increment approversCount
        approversCount++;
    }

    // require struct variables to be passed into the function
    function createRequest(string description, uint value, address recipient)
        public restricted
    {

        // use arguments to create a brand new request object
        Request memory newRequest = Request({ // use memory keyword
           // place a collection of key value pairs and set the value
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0

          // approvals mapping is not initialized because
          // only the value types are required to be initialized
          // a mapping is a reference type
        });

        // an alternative syntax for line 46 to 52
        // Request(description, value, recipient, false);
        // IMPORTANT: this works in a very tricky way and requires a consistent
        // order of arguments/fields

        requests.push(newRequest);
    }

    // Approving a Request
    function approveRequest(uint index) public { // pass on the index of the selected request
        // assign a variable
        Request storage request = requests[index];

        // two quick checks
        // first check: the person has already contributed
        require(approvers[msg.sender]); // this gets a boolean of true if msg.sender already contributed

        // second check: has NOT already approved the specific request
        require(!request.approvals[msg.sender]);

        // the person should be marked to have already voted on the requests
        request.approvals[msg.sender] = true;

        // place actual logic to add the person's address
        // to the approvals hash (mapping)
        // and increment the approvalCount.
        request.approvalCount++;
    }

    // Finalizing a Request (specify which request we're trying to finalize)
    function finalizeRequest(uint index) public restricted { // the manager is the only one allowed to do this
        Request storage request = requests[index]; // store requests[index] into variable request (small caps)
        // Capital Request specifies that we are about to create a variable
        // that's going to reference to a request struct

        // Basic Checks:

        // Check if at least 50% voted YES
        require(request.approvalCount > (approversCount / 2));

        // This request has not been marked as complete
        require(!request.complete); // <-- check if it's false

        // Transfer the funds to the recipient of the request
        request.recipient.transfer(request.value);

        // flip the flag to show it has been marked complete
        request.complete = true;
    }


}
