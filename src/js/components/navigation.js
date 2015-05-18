/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var Navigagtion = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
        return <div class="main-page">HELLO I AM THE MAIN PAGE</div>
    }

})

var NavLink = React.createClass({
        render:function(){
            return (<div className="navLink">I'm a link</div>)
        }
    });


module.exports = Navigagtion;