"use strict";

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if(!confirm('Are you sure you read a page that is boring')){
                transition.about();
            }
            else{
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            if(!confirm('Are you sure leave exciting page')){
                transition.about();
            }

        }
    },
    componentDidMount: function() {
        // Get the components DOM node
        var elem = this.getDOMNode();
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        window.requestAnimationFrame(function() {
            // Now set a transition on the opacity
            elem.style.transition = "opacity 2000ms";
            // and set the opacity to 1
            elem.style.opacity = 1;
        });
    },
    componentWillEnter: function(callback){
        var $el = $(this.getDOMNode())
        $el.slideDown(function() {
            callback();
        });
    },
    componentWillLeave: function(callback){
            var $el = $(this.getDOMNode());
            $el.slideUp(function(){
                callback();
            });
        },
    render: function(){
        return(
            <div className="jumbotron">




                <h1>About</h1>
                <p>
                    This application uses the following techs:
                    <ul>
                        <li>React</li>
                        <li>React2</li>
                        <li>React3</li>
                    </ul>

                </p>


            </div>
        );
    }
});

module.exports = About;