"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');





 Router.run(routes, function(Handler){
   React.render(<Handler/>, document.getElementById('app'));
});


// if you want history you have to configure server to support clean urls, must redirect requests for app to clientside index page

/*
 Router.run(routes, Router.HistoryLocation, function(Handler){
 React.render(<Handler/>, document.getElementById('app'));
 });

componentWillMount - before initial render / C and S - good to set initial state
componentDidMount - after render - access dom, integrate frameworks, timers, ajax
componentWillReceiveProps - when receiving new props - set state before render
shouldComponentUpdate - before render when new props or state being received - performance return false to void unnessary renders
componentWillUpdate - immediately before rendering when new props or state are being received - prepare for update
componentDidUpdate - after components updates are flushed to Dom
componentWillUnmount - immediately before component is removed from Dom - cleanup


 */

