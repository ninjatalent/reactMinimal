"use strict";

var React = require('react');
var MaxInput = require('../common/MaxInput');
var MaxTextField = require('../common/MaxTextField');
var MaxCheckBox = require('../common/MaxCheckBox');
var MaxAttachment = require('../common/MaxAttachment');
var MaxSelect = require('../common/MaxSelect');
var moment = require('moment');

var DateTimePicker = require('react-widgets/lib/DateTimePicker')


var WebsiteList = React.createClass({
    handleModalState: function(id){
        alert(id);

    },
    getInitialState: function(){
      return { value0: new Date(), value1: null}  ;
    },
    componentDidMount: function(){

    },
    getValue: function(event){

        alert(event);
    },
    render: function(){
        var createRow = function(data){
            return(
                <tr key={data._id}>
                    <td data-toggle="modal" data-target="#myModal" className="makeLink" data-id={data._id} onClick={this.props.handleModalClick.bind(null,data._id)}>{data.title}</td>
                    <td>{data.url}</td>
                    <td>{data.reporter}</td>
                    <td>{data.date}</td>
                    <td>{data.assigned}</td>
                    <td>{data.eta}</td>
                </tr>
            );
        };


        return(
            <div>
                <h1>View Website Issues</h1>

                <table className="table">
                    <thead>
                    <th>Title</th>
                    <th>Url</th>
                    <th>Reporter</th>
                    <th>Date</th>
                    <th>Assigned</th>
                    <th>ETA</th>
                    </thead>
                    <tbody>
                    {this.props.data.map(createRow, this)}
                    </tbody>
                </table>

                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Details</h4>
                            </div>
                            <div className="modal-body">
                                <p>

                                    <MaxSelect
                                        name="assigned"
                                        label="Assign to someone"
                                        placeholder = "assigned"
                                        value = {this.props.form.assigned}
                                        values = {this.props.people}
                                        onChange = {this.props.onChange}
                                        error={this.props.error.device} />
                                    <br />

                                    <MaxTextField name="description"
                                                  label="Enter a complete description"
                                                  placeholder="Description"
                                                  value = {this.props.form.description}
                                                  onChange = {this.props.onChange}
                                                  error={this.props.error.description} />
                                    <br />


                                    <br />
                                    <DateTimePicker value={this.state.value0}
                                                    onChange={this.getValue.bind(null, '0')} />

                                    <input type="button" id="send" value="Save" className="btn btn-default" onClick={this.props.formSave}  />
                                    <table className="table">
                                        <thead>
                                        <th>Title</th>
                                        <th>Url</th>
                                        <th>Reporter</th>
                                        <th>Date</th>
                                        <th>Mark Completed</th>
                                        <th>Delete</th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{this.props.form.title}</td>
                                            <td>{this.props.form.url}</td>
                                            <td>{this.props.form.reporter}</td>
                                            <td>{this.props.form.date}</td>
                                            <td><input type="button" id="send" value="Completed" className="btn btn-default"  /></td>
                                            <td><input type="button" id="send" value="Delete" className="btn btn-default"  /></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        );


    }

});

module.exports = WebsiteList;