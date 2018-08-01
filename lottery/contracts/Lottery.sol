pragma solidity ^0.4.17; // specify solidity version

contract Lottery {
    // define the different variables
    address public manager; // public visibility so other devs
    // (front end JS app from this contract) could easily access it
    address public lastWinner;

    // initialize the players variable (an array of addresses)
    // function copied from https://ethfiddle.com/zETJQ8KNtC
    address[] public players;

    // stores values of ethers sent by each contributor
    uint256[] private amount;



    function Lottery() public { // create the constructor function
        manager = msg.sender; // always available inside of our functions,
    }

        // this requests players to  send contribution
    function enter() public payable {
        // enforce a rule where added players sends contribution
        require(msg.value > .01 ether);

        // My added code to make sure manager isn't allowed to join or win
        // require(msg.sender != manager);

        // add its address to the players array
        players.push(msg.sender);

        amount.push(msg.value);
    }

    // create a helper function to pseudo-randomize selection
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public restricted reset {
        uint index = random() % players.length; // index of the person going to win
        players[index].transfer(this.balance); // access the address of the winner via 'index' value
        lastWinner = players[index]; // records who won previously
    }

    // how to cancel lottery and return funds to contributor
    function returnEntries() public payable restricted reset {
        for (uint i=0; i<amount.length; i++) {
            players[i].transfer(amount[i]);
        }
    }

    // self added to reduce code
    modifier reset() {
        _;
        players = new address[](0);
    }

    modifier restricted() {
         // make sure the executor is the manager
        require(msg.sender == manager);
        _; // executes all the codes within the function that used
        // the restricted function
    }

    // list all contributors (could be used by web apps)
    function getPlayers() public view returns (address[]) { // everyone can see but cannot modify
        return players;
    }

}
