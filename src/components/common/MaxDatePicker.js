"use strict";

var React = require('react');
var DateTimePicker = require('react-widgets/lib/DateTimePicker');


var MaxDatePicker = React.createClass({

    propTypes: {
      name: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired,
      value: React.PropTypes.string,
      error: React.PropTypes.string
    },

    onDateChanged: function(newDate) {
        this.props.onChange({
          name: this.props.name,
          value: newDate
        });
    },

    render: function() {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>

                <div className="field">
                    <DateTimePicker
                        name={this.props.name}
                        value={new Date(this.props.value)}
                        onChange={this.onDateChanged} />

                    <div className="error">{this.props.error}</div>
                </div>
            </div>
        );


    }


});

module.exports = MaxDatePicker;