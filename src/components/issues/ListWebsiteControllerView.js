"use strict";

var React = require('react');
var Router = require('react-router');
var ListWebsite = require('./ListWebsite');
var toastr = require('toastr');
var assign = require('object-assign');



var iReportControllerView = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function(){
        var initial = {
            "data": [{"_id":"5612c175582143a832a30590","url":"aassa","reporter":"steve","title":"nothing","description":"patched again yo saved formssssss","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-05T18:22:39.546Z","eta":"2015-10-14T06:00:00.000Z","assigned":"3","email":"cturner@max.com"},{"_id":"5612ccccc945c1d8327d1413","url":"justnewRefactor2","reporter":"steve","title":"nothing","description":"ya","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-05T18:22:39.546Z","eta":"2020-01-01T00:00:00.000Z","assigned":"unassigned","email":"cturner@max.com"},{"_id":"560d6cfff2d007a80dd443fd","url":"just updated url","reporter":"ok","title":"no","description":"yea life","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-07T21:39:29.896Z","eta":"2020-01-01T00:00:00.000Z","assigned":"unassigned","email":"cturner@max.com"},{"_id":"560cb9b82d477c3433074a46","url":"ok","reporter":"steve","title":"no","description":"life is great","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-07T21:39:29.897Z","eta":"2020-01-01T00:00:00.000Z","assigned":"unassigned","email":"cturner@max.com"},{"_id":"560cbbb63a23f1ac153a0523","url":"ok","reporter":"steve","title":"bbbbb","description":"life is great","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-07T21:39:29.897Z","eta":"2020-01-01T00:00:00.000Z","assigned":"unassigned","email":"cturner@max.com"},{"_id":"560d73f21eaec6fc228d743f","url":"just updated url","reporter":"ok","title":"no","description":"yea life","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-07T21:39:29.897Z","eta":"2020-01-01T00:00:00.000Z","assigned":"unassigned","email":"cturner@max.com"},{"_id":"560dd4c30bb12fc03b694992","url":"asdfasdf asdf asdf ","reporter":"2","title":"please please please","description":"asdf asdfasdf asdf asdf asdf sadfsad fasfdfasd fsf dsfsad afsdafds afsd fdasafsdfsda fasdfasdf sdaafsdfdas fds afsdafsdfa sdafs d fasdfasdfas daf sdafds","browser":"2","device":"1","__v":0,"date":"2015-10-07T21:39:29.897Z","eta":"2020-01-01T00:00:00.000Z","assigned":"unassigned","email":"cturner@max.com"}],
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


    },
    setModelState: function(event){


            var field = event.target.name;
            var value = event.target.value;

            this.state.form[field] = value;
            this.setState({form: this.state.form});
        alert(JSON.stringify(this.state.form));
            return this.setState({form: this.state.form});






    },
    formSave: function(){
        var that = this;
        var sendData = this.state.form;
        var id = this.state.id;


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
    handleModalClicked: function(){

        var data = {"_id":"5612c175582143a832a30590","url":"aassa","reporter":"steve","title":"nothing","description":"patched again yo saved formssssss","browser":"chrome","device":"desktop","__v":0,"date":"2015-10-05T18:22:39.546Z","eta":"2015-10-14T06:00:00.000Z","assigned":"3","email":"cturner@max.com"};
        this.setState({form: data })



    },
    render: function(){
          return(
              <div>
                   <ListWebsite data={this.state.data}
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