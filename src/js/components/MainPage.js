/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var BoidFlock = require('../libs/BoidFlock');


var MainPage = React.createClass({
    proptypes:{},

    handleClick:function(){
        AppActions.testAction(1);
    },
    componentDidMount:function(){
        Store.addChangeListener(this.onChange)
    },
    onChange:function(){

    },
    render:function(){
        return <div class="main-page">
            <MainPageBlurb />
        </div>
    }
})

var MainPageBlurb = React.createClass({
    getInitialState:function(){
        return {topOffset: Store.getScreenSize().height/5 }
    },
    getOffset:function(){
        return "translate(100px,"+this.state.topOffset+"px)"
    },
    componentDidMount:function(){
        Store.addChangeListener(this.onChange)
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange)
    },
    onChange:function(){
        this.setState({ 'topOffset': Store.getScreenSize().height/5 })
    },
    getStyle:function(){
        return {
            "msTransform": this.getOffset(),
            "webkitTransform": this.getOffset(),
            "transform": this.getOffset(),
            "color": "#ff00ff",
            "width":"300px",
            "margin":"0 auto",
            "WebkitTransition": ".5s ease-in-out",
            "MozTransition": ".5s ease-in-out",
            "OTransition": ".5s ease-in-out",
            "transition": ".5s ease-in-out"

        }
    },

    render:function(){
        return <div style={this.getStyle()}>
            Hello - I'm Graham. Lovely to see you.
        </div>
    }
})

module.exports = MainPage;