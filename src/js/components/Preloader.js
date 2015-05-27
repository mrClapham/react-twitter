/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var PreloaderApp = React.createClass({
    _show:function(){
        this.setProps({'showing': true} )
        var _this = this
       if(Store.getIsLoading() === false){
           window.setTimeout(function(){
               console.log("Showing changed --- preloader",_this.props.showing )
               _this.setProps({'showing': Store.getIsLoading()} )

           }, 200)
       }
    },
    getInitialState:function(){
        return {showing:Store.getIsLoading()}
    },

    getDefaultProps:function(){
        return {showing:Store.getIsLoading()}
    },
    componentWillMount:function(){
    },
    componentDidMount:function(){
        console.log("The Preloader Did Mount --->> ")
        Store.addChangeListener(this._show);
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this._show)
    },
    render:function(){
        return   <div id = 'preloader' className={this.props.showing ? 'loading' : 'loaded'}>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
            <h1>load</h1>
        </div>

    }
})

module.exports = PreloaderApp;
