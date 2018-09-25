const routes = require("next-routes")();

// setup a new route so that if a user accesses a campaign, it will use the show.js component
routes

  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show"); // use a wildcard by placing a colon
// before the name of the wildcard property (variable of sorts)
// second arg presents which route will be shown

// routes.add('...','...');

module.exports = routes; // contains different helpers and help us generate link tags
