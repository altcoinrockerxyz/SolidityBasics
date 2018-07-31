pragma solidity ^0.4.17; // specify solidity version

contract Lottery {
    // define the different variables
    address public manager; // public visibility so other devs
    // (front end JS app from this contract) could easily access it

    // initialize the players variable (an array of addresses)
    // function copied from https://ethfiddle.com/zETJQ8KNtC
    address[] public players;

    // stores values of ethers sent by each contributor
    uint256[] private amount;

    function Lottery() public { // create the constructor function
        // automatically get address of the person
        // who is creating this contract
        // we need to invoke a global variable  ('msg' object)
        manager = msg.sender; // always available inside of our functions,
        // ^^ no need for declarations

        // use dynamic arrays to get players
    }

        // this requests players to  send contribution
    function enter() public payable {
        // enforce a rule where added players sends contribution
        require(msg.value > .01 ether);

        // My added code to make sure manager isn't allowed to join or win
        require(msg.sender != manager);

        // click the Debug down at the console
        // for a way to get debug info clearer

        // add its address to the players array
        players.push(msg.sender);

        // add amount sent by player to amount array
        // function copied from https://ethfiddle.com/zETJQ8KNtC
        amount.push(msg.value);
    }

    // pickWinner, Solidity do not have random number generator
    // and it's tough to truely randomly generate a number
    // so we will create a Pseudo-random generator (not really random)

    // create a helper function to pseudo-randomize selection
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
        // sha3 or keccak256 is a global function
        // block diff is also global var
    }

    function pickWinner() public restricted reset {
        // make sure the person picking winner is the manager
        // require(msg.sender == manager);

        uint index = random() % players.length; // index of the person going to win
        players[index].transfer(this.balance); // access the address of the winner via 'index' value
        // DOTtransfer() sends funds from pot
        // to reference amt of ether in the contract, use this.balance

        // reset the players array
        // players = new address[](0); // creates a brand new dynamic array of type address
        // dynamic array - box without value inside []
        //
    }

    // how to cancel lottery and return funds to contributor
    function returnEntries() public payable restricted reset {
        // use function modifier to require manager
        // function modifier - a means to reduce the amount of code we write
        // function copied from https://ethfiddle.com/zETJQ8KNtC
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
