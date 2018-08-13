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
}
