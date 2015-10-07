"use strict";

var React = require('react');
var Router = require('react-router');
var Iwebsites = require('./FormWebsite');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');
var assign = require('object-assign');



var IssuesControllerView = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function(){
        var initial = {
            "device":[{"name":"Select...","value": 0},{"name":"Desktop","value": 1},{"name":"Tablet","value": 2},{"name":"Mobile", "value": 3}],
            "browser":[{"name":"Select...","value": 0},{"name":"Chrome","value": 1},{"name":"Firefox","value": 2},{"name":"Internet Explorer", "value": 3},{"name":"Safari", "value": 4}],
            "people" :[{"name":"Select...","value": 0},{"name":"Samantha Something", "value" : 1},{"name":"Cade Turner", "value": 2},{"name":"Tressa Something", "value":3},{"name":"Eric Anderson", "value":4}],
            "data" : {
                "url" : "",
                "reporter" : "",
                "duplicated" : "",
                "title" : "",
                "description" : "",
                "browser": "",
                "device" : "",
                "attachment" : ""
            },
            "errors":{}
        };
        return initial;


    },
    setModelState: function(event){
        // alert(JSON.stringify(this.state.data));
        var field = event.target.name;
        var value = event.target.value;
        this.state.data[field] = value;
        return this.setState({data: this.state.data});


    },
    checkFormState: function(){
        if(this.state.data.url.length > 0 && this.state.data.reporter > 0) {
            toastr.success('Please Continue');
            document.getElementById('hide').style.display = "block";
            document.getElementById('start').style.display = "none";
        }
        else{
            toastr.error('You must fill out the form');
        }


    },
    validateBeforeSubmit: function(){

        this.state.errors = {};

        var formIsValid = true;

        if(this.state.data.url.length < 3)
        {
            this.state.errors.url = "Url must be long enough";
            formIsValid = false;

        }

        if(this.state.data.reporter == 0)
        {
            this.state.errors.reporter = "You must select an individual";
            formIsValid = false;

        }

        if(this.state.data.duplicated > 3)
        {
            this.state.errors.duplicated = "you must duplicate";
            formIsValid = false;

        }

        if(this.state.data.title.length < 10)
        {
            this.state.errors.title = "You must add a title over 10 characters";
            formIsValid = false;

        }

        if(this.state.data.description.length < 100)
        {
            this.state.errors.description = "Description must be over 100 characters";
            formIsValid = false;

        }

        if(this.state.data.browser ==  0)
        {
            this.state.errors.browser = "You must select a browser";
            formIsValid = false;

        }

        if(this.state.data.device == 0)
        {
            this.state.errors.device = "You must select a device";
            formIsValid = false;

        }

        if(this.state.data.attachment == 0)
        {
           // this.state.errors.attachment = "You must have a attachment";
           // formIsValid = false;

        }

        this.setState({errors: this.state.errors})

        return formIsValid;

    },
    onSubmit: function(){
        if(!this.validateBeforeSubmit())
        {
            alert("feel out form");
        }
        else
        {
            alert('ok');
            alert(JSON.stringify(this.state.data));
            alert(JSON.stringify(this.state.data.url));
            alert("new4");
            var postData = this.state.data;
            $(document).ready(function(){

            alert('in json');
                alert(JSON.stringify(postData));

                 $.ajax({
                     url: 'http://localhost:8000/api/issue',
                     type: "post",
                     dataType: "json",
                     data: postData,
                     beforeSend: function () {
                     },
                     success: function (data) {

                     alert(JSON.stringify(data));
                     },
                     complete: function () {

                     // Ranks.Summary2();
                     },
                     error: function(){

                     }

                 });


            });
        }

    },
    render: function(){
        var currentRouteName = this.context.router.getCurrentPathname();

        var myobj = {
            poop : "ppop"
        };

        if(currentRouteName.indexOf("website") > -1)
        {


            return (
                <Iwebsites
                    device={this.state.device}
                    browser={this.state.browser}
                    people={this.state.people}
                    data = {this.state.data}
                    onChange={this.setModelState}
                    errors={this.state.errors}
                    onFormContinue={this.checkFormState}
                    onSubmit = {this.onSubmit}


                    />
            );
        }
        else if (currentRouteName.indexOf("mobile") > -1)
        {
            return (
                <Imobile
                    device={this.state.device}
                    browser={this.state.browser}
                    people={this.state.people}
                    onChange={this.setState}
                    errors={this.state.errors}

                    />
            );
        }






    }

});

module.exports = IssuesControllerView;