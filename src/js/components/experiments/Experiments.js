/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");



var Experiments = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
        return <div>
            <h1>HWLLO I AM THE EXPERIMENTS PAGE</h1>
        </div>
    }
})






module.exports = Experiments;