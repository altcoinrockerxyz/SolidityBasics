import React, { Component } from "react";
import Layout from "../../components/Layout";

class CampaignShow extends Component {
  // NOTE: we are concerned about one VERY PARTICULAR campaign
  static async getInitialProps(props) {
    // a separate props object of its own
    console.log(props.query.address); // this is the token we have on the URL

    return {};
  }
  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
      </Layout>
    );
  }
}

export default CampaignShow;
