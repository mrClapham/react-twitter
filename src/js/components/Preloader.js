/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var PreloaderApp = React.createClass({
    show:function(){

    },
    getDefaultProps:function(){
        return {showing:true};
    },
    getDefaultState:function(){
        return {showing:Store.getIsLoading()}
    },
    componentWillMount:function(){
    },
    componentDidlMount:function(){
        Store.addChangeListener(this.show)
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.show)
    },
    render:function(){
        return <div id = 'preloader' >
        <h1>Preloader</h1>
        <h1>Preloader</h1>
        <h1>Preloader</h1>
        <h1>Preloader</h1>
        <h1>Preloader</h1>
        </div>
    }
})

module.exports = PreloaderApp;



