pragma solidity ^0.4.17; // declares what version is used

contract Inbox {
  string public message; // this creates an invisible function that
  // returns the value of the declared variable

  function Inbox(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string NewMessage) public {
    message = newMessage;
  }
}
