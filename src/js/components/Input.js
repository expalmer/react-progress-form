
var React     = require('react');
var classSet  = require('../utils/classSet');

var InputElement = React.createClass({
  render: function() {
    var item = this.props.item;
    var classes = classSet({
      "form--group": true,
      "has--error": item.hasError && !item.pristine
    });
    return (
      <div className={classes}>
        <label htmlFor={item.id}>{item.label}</label>
        <input type="text" className="form--control" id={item.id} value={item.value} onChange={this._onChange}/>
        <span className="form--focus"></span>
        <span className="form--error">{item.errorMessage}</span>
      </div>
    );
  },
  _onChange: function(e) {
    var value = e.target.value;
    this.props.onChangeInputHandler( this.props.index, value );
  }
});

module.exports = InputElement;
