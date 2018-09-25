"use strict";

var routes = require("next-routes")();

// setup a new route so that if a user accesses a campaign, it will use the show.js component
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show"); // use a wildcard by placing a colon
// before the name of the wildcard property (variable of sorts)
// second arg presents which route will be shown

// routes.add('...','...');

module.exports = routes; // contains different helpers and help us generate link tags
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BRUcsQUFGSCxJQUVPLEFBRlAsa0JBRXlCLEFBRnpCLGtCQUdHLEFBSEgsSUFHTyxBQUhQLHVCQUc4QixBQUg5QixBLG9CQUdrRDtBQUNsRDtBQUNBOztBQUVBOztBQUVBLE9BQU8sQUFBUCxVQUFpQixBQUFqQixBLFFBQXlCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==