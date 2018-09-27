"use strict";

var routes = require("next-routes")();

// setup a new route so that if a user accesses a campaign, it will use the show.js component
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show") // use a wildcard by placing a colon
// before the name of the wildcard property (variable of sorts)
// second arg presents which route will be shown

// Lecture 193 - add a new route for list of requests
.add("/campaigns/:address/requests", "/campaigns/requests/index")

// Lecture 195 - route for Add New Request
.add("/campaigns/:address/requests/new", "/campaigns/requests/new");

// routes.add('...','...');

module.exports = routes; // contains different helpers and help us generate link tags
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BRUcsQUFGSCxJQUVPLEFBRlAsa0JBRXlCLEFBRnpCLGtCQUdHLEFBSEgsSUFHTyxBQUhQLHVCQUc4QixBQUg5QixtQkFHaUQ7QUFDL0M7QUFDQTs7QUFFQSxBQVBGO0NBUUcsQUFSSCxJQVFPLEFBUlAsZ0NBUXVDLEFBUnZDOztBQVVFLEFBVkY7Q0FXRyxBQVhILElBV08sQUFYUCxvQ0FXMkMsQUFYM0M7O0FBYUE7O0FBRUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCLEEsUUFBeUIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9