"use strict";

var React = require('react');
var MaxInput = require('../common/MaxInput');
var MaxTextField = require('../common/MaxTextField');
var MaxCheckBox = require('../common/MaxCheckBox');
var MaxAttachment = require('../common/MaxAttachment');
var MaxSelect = require('../common/MaxSelect');
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

                    <MaxInput
                           name="url"
                           label="Enter the full URL"
                           placeholder = "Enter url"
                           value = {this.props.data.url}
                           onChange = {this.props.onChange}
                           error={this.props.errors.url} />
                    <br />

                    <MaxSelect
                        name="reporter"
                        label="The individual reporting the issue"
                        placeholder = "Select a name"
                        value = {this.props.data.reporter}
                        values = {this.props.people}
                        onChange = {this.props.onChange}
                        error={this.props.errors.reporter} />
                    <br />

                    <MaxCheckBox name="duplicated"
                                 label="Check if you have you duplicated the issue?"
                                 value = {this.props.data.duplicated}
                                 onChange = {this.props.onChange}
                                 error={this.props.errors.duplicated} />
                    <br />

                <input id="start" type="button" value="Start" className="btn btn-default" onClick={this.props.onFormContinue} />
                <div id="hide">

                    <MaxInput
                        name="title"
                        label="Enter Title of Issue"
                        placeholder = "Enter Title"
                        value = {this.props.data.title}
                        onChange = {this.props.onChange}
                        error={this.props.errors.title} />
                    <br />

                    <MaxTextField name="description"
                                  label="Enter a complete description"
                                  placeholder="Description"
                                  value = {this.props.data.description}
                                  onChange = {this.props.onChange}
                                  error={this.props.errors.description} />
                    <br />

                    <MaxSelect
                        name="browser"
                        label="Enter the browser type"
                        placeholder = "browser"
                        value = {this.props.data.browser}
                        values = {this.props.browser}
                        onChange = {this.props.onChange}
                        error={this.props.errors.browser} />
                    <br />

                    <MaxSelect
                        name="device"
                        label="Enter the device type"
                        placeholder = "device"
                        value = {this.props.data.device}
                        values = {this.props.device}
                        onChange = {this.props.onChange}
                        error={this.props.errors.device} />
                    <br />

                    <MaxAttachment name="attachment"
                                 label="Brant Cool"
                                 value={this.props.attachment}
                                 onChange = {this.props.onChange}
                                 error={this.props.errors.attachment} />
                    <br />


                <input type="button" id="send" value="Send" className="btn btn-default" onClick={this.props.onSubmit} />
                <br /><br />
                </div>

            </form>
        );


    }

});


module.exports = Iwebsites;
