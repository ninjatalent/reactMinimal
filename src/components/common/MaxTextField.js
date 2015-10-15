"use strict";

var React = require('react');
var _MaxInputChangeMixin = require('./_MaxInputChangeMixin');


var Mtext = React.createClass({
    mixins: [_MaxInputChangeMixin],

    render: function(){
        var wrapperClass = 'form-group';
        if(this.props.error && this.props.error.length >0){
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <textarea type="text"
                           name={this.props.name}
                           className="form-control"
                           value = {this.props.value}
                           placeholder={this.props.placeholder}
                           ref={this.props.name}
                           onChange = {this.onInputChanged}
                           data-distinguish={this.props.name}
                           rows="3" />


                    <div className="error">{this.props.error}</div>
                </div>
            </div>
        );

    }
});

module.exports = Mtext;