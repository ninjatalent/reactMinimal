"use strict";

var React = require('react');


var MaxDatePicker = React.createClass({
    render: function() {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>

                <div className="field">
                    <input type="text"
                           name={this.props.name}
                           className="form-control"
                           placeholder={this.props.placeholder}
                           value={this.props.value}
                           ref={this.props.name}
                           onChange={this.props.onChange}
                           data-distinguish={this.props.name}/>

                    <div className="error">{this.props.error}</div>
                </div>
            </div>
        );


    }


});

module.exports = MaxDatePicker;