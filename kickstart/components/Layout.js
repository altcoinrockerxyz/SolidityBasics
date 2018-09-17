/**

This will house all reusable components

How will this component be used?
1. Place the whole list component within the layout
  -- Campaign List should be a 'child' of Layout

**/

// Boilerplate (default) component stuff
import React from "react";

export default props => {
  // place props or (props) to reference props.children
  return (
    // a little bit of JSX for quick demo
    <div>
      <h1>Im a header</h1>
      {props.children}
      <h1>Im a footer</h1>
    </div>
  );
};
