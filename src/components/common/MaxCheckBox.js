"use strict";

var React = require('react');


var MaxCheckBox = React.createClass({
    render: function(){
        var wrapperClass = 'checkbox';
        if(this.props.error && this.props.error.length >0){
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>

                <div className="field">
                <label htmlFor={this.props.name}>
                    <input type="checkbox"
                           name={this.props.name}
                           className="checkbox"
                           placeholder={this.props.placeholder}
                           ref={this.props.name}
                           onChange = {this.props.onChange}
                           data-distinguish={this.props.name}/> {this.props.label}
                </label>
                    <div className="error">{this.props.error}</div>
                </div>
            </div>
        );

    }
});

module.exports = MaxCheckBox;