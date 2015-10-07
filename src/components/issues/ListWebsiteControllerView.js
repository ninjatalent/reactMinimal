"use strict";

var React = require('react');
var Router = require('react-router');
var WebsiteList = require('./ListWebsite');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');
var assign = require('object-assign');



var iReportControllerView = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function(){
        var initial = {
            "data": [],
            "people": [{"name":"select...", "value":0},{"name":"Brant Snow","value":1},{"name":"Niqui Eastman", "value":2},{"name":"Jeff Hanson","value":3},{"name":"Dave Decay","value":4},{"name":"Doug Sharp","value":5}],
            "error": {},
            "id" : "",
            "modal" : {},
            "assigned": "",
            "form" : {}

        };


        return initial;
    },
    componentDidMount: function(){



      if(this.isMounted()){
           var that = this;
           $.ajax({
           url: 'http://localhost:8000/api/issue',
           type: "get",
           dataType: "json",
           beforeSend: function () {
           },
           success: function (json) {


               that.setState({data : json});

           },
           complete: function () {

           // Ranks.Summary2();
           },
           error: function(){

           }

           });

      }
    },
    setModelState: function(event){


            var field = event.target.name;
            var value = event.target.value;
            alert(field);
            this.state.form[field] = value;
            this.setState({form: this.state.form});
            return this.setState({form: this.state.form});






    },
    formSave: function(){
        var that = this;
        var sendData = this.state.form;
        var id = this.state.id;
        alert(JSON.stringify(sendData));
        alert(this.state.form.eta);

        $.ajax({
            url: 'http://localhost:8000/api/issue/' + id,
            type: "patch",
            data: sendData,
            dataType: "json",
            beforeSend: function () {
            },
            success: function (json) {

                console.log("success");
                that.setState({modal : json});

            },
            complete: function () {
                console.log("complete");
                // Ranks.Summary2();
            },
            error: function(){
                console.log("error");
            }

        });

    },
    handleModalClicked: function(id){
        alert("clicked " + id);
        this.setState({"id":id});
        var that = this;
        $.ajax({
            url: 'http://localhost:8000/api/issue/' + id,
            type: "get",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (json) {


                that.setState({form : json});

            },
            complete: function () {

                // Ranks.Summary2();
            },
            error: function(){

            }

        });

    },
    render: function(){
          return(
              <div>
                   <WebsiteList data={this.state.data}
                                handleModalClick={this.handleModalClicked}
                                modal={this.state.modal}
                                people={this.state.people}
                                form={this.state.form}
                                error={this.state.error}
                                onChange = {this.setModelState}
                                formSave = {this.formSave}

                                  />
              </div>
          );

    }

});

module.exports = iReportControllerView;