/**

This will house all reusable components

How will this component be used?
1. Place the whole list component within the layout
  -- Campaign List should be a 'child' of Layout

**/

// Boilerplate (default) component stuff
import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

export default props => {
  // place props or (props) to reference props.children
  return (
    // a little bit of JSX for quick demo
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};
