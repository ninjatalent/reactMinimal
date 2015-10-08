"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/issues/ListWebsiteControllerView')} />
        <Route name="FormWebsiteIssue" path="issues/formwebsite" handler={require('./components/issues/FormWebsiteControllerView')} />
        <Route name="ListWebsiteIssue" path="issues/listwebsite" handler={require('./components/issues/ListWebsiteControllerView')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthurs" to="authors" />
        <Redirect from="about/*" to="about" />
    </Route>

);

module.exports = routes;