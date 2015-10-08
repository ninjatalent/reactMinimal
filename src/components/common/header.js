"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">I.T. Tracking</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Requests <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Websites</li>
                                    <li><a href="#">Max.com</a></li>
                                    <li><a href="#">Virtual Office</a></li>
                                    <li><a href="#">New Site</a></li>

                                    <li role="separator" className="divider"></li>
                                    <li className="dropdown-header">Promotions</li>
                                    <li><a href="#">New Promotion</a></li>

                                    <li role="separator" className="divider"></li>
                                    <li className="dropdown-header">Mobile</li>
                                    <li><a href="#">Max App</a></li>
                                    <li><a href="#">Weightloss</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Issues <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Websites</li>
                                    <li><Link to="FormWebsiteIssue">Submit Website Issues</Link></li>
                                    <li><Link to="ListWebsiteIssue">View Website Issues</Link></li>
                                    <li role="separator" className="divider"></li>

                                    <li className="dropdown-header">Mobile</li>

                                    <li role="separator" className="divider"></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );

    }
});

module.exports = Header;