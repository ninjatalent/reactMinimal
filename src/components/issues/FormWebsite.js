"use strict";

var React = require('react');
var IssuesControllerView = require('./FormWebsiteControllerView');


var Iwebsites = React.createClass({
    onClick : function(){


        alert("ok");
       document.getElementById('hide').style.display = "block";
        document.getElementById('start').style.display = "none";


    },
    onSubmit : function(){

    },
    render: function(){
        return(
            <form>
                <h1>Submit Website Issues</h1>

                <div>{this.props.firstName}</div>
                <br />
                <div>{this.props.direct}</div>





                <br /><br />


            </form>
        );


    }

});


module.exports = Iwebsites;
