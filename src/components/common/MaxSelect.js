"use strict";

var React = require('react');
var _MaxInputChangeMixin = require('./_MaxInputChangeMixin');

var MaxSelect = React.createClass({
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
                    <select
                           name={this.props.name}
                           className="form-control"
                           placeholder={this.props.placeholder}
                           value = {this.props.value}
                           ref={this.props.name}
                           onChange = {this.onInputChanged}
                           data-distinguish={this.props.name}>
                        {this.props.values.map(function(item){
                            return <option value={item.value}>{item.name}</option>
                        })}
                     </select>
                    <div className="error">{this.props.error}</div>
                </div>
            </div>
        );

    }
});

module.exports = MaxSelect;