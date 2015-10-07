"use strict";

var React = require('react');


var MaxAttachment = React.createClass({
    render: function(){
        var wrapperClass = 'form-group';
        if(this.props.error && this.props.error.length >0){
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>File input</label>
                <div className="field">
                    <input type="file"
                           name={this.props.name}
                           className="form-control"
                           placeholder={this.props.placeholder}
                           ref={this.props.name}
                           onChange = {this.props.onChange}
                           data-distinguish={this.props.name}/>
                <p class="help-block">Example block-level help text here.</p>

                    <div className="error">{this.props.error}</div>
                </div>
            </div>
        );

    }
});

module.exports = MaxAttachment;