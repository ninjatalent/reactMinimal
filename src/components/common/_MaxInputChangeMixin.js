/**
 * @author v.lugovksy
 * created on 15.10.2015
 */

var React = require('react');

var _MaxInputChangeMixin = {

  onInputChanged: function(evt) {
    console.log(evt);
    this.props.onChange({
      name: evt.target.name,
      value: evt.target.value
    });
  }

};

module.exports = _MaxInputChangeMixin;