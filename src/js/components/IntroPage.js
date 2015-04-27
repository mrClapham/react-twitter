/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var IntroPage = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
        return <div class="main-page">HELLO I AM THE MAIN PAGE</div>
    }

})


module.exports = IntroPage;