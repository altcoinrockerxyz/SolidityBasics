import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
// import the link helper from the routes file inside the root project directory
import { Link } from "../routes";

// whenever we are using a JSX and want to pass in an object literal,
// we have to place two (2) sets of curly braces
// The first set is a declaration that we are about to write a JavaScript expression
// Second set is the actual object literal

// delete Menu.Item and replace with Link tags because
// styling of the two conflict with each other
export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
