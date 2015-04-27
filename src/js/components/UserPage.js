/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var UserPage = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
        return <div class="main-page">HELLO I AM THE USER PAGE</div>
    }
})


module.exports = UserPage;