/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");

var TwitterComponent = React.createClass({
    proptypes:{},
    twitterSearch:function(){
        AppActions.testAction(-1);
    },
    render:function(){
        return <div class = "dashboard">
            <button type="button" onClick={this.twitterSearch}>Search</button>
        </div>
    }
})

module.exports = TwitterComponent;