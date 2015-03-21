/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions.js");

var GenericButton = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
        return <button type="button" onClick={this.handleClick}>Click Me!</button>
    }

})


module.exports = GenericButton;