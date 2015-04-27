/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var DashBoard = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(-1);
    },
    render:function(){
        return <div class = "dashboard">
            <button type="button" onClick={this.handleClick}>Reduce the number!</button>
        </div>
    }

})

module.exports = DashBoard;