import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

// whenever we are using a JSX and want to pass in an object literal,
// we have to place two (2) sets of curly braces
// The first set is a declaration that we are about to write a JavaScript expression
// Second set is the actual object literal
export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>CrowdCoin</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
