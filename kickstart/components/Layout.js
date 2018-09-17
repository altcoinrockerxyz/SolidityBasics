/**

This will house all reusable components

How will this component be used?
1. Place the whole list component within the layout
  -- Campaign List should be a 'child' of Layout

**/

// Boilerplate (default) component stuff
import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

export default props => {
  // place props or (props) to reference props.children
  return (
    // a little bit of JSX for quick demo
    // move the link tag into the head tag by adding a helper via import
    // placing any other tags inside the <Head> component,
    // everything will automatically be moved up to the head tag of the page's html
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
