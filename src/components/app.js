/*eslint-disable strict */

$ = jQuery = require('jquery');
var Bootstrap = require('bootstrap');
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
var Footer = require('./common/footer');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <div className="container">
                <RouteHandler/>
                </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = App;