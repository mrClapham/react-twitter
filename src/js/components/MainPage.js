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
        this.onChange();
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange)
    },
    onChange:function(){
        console.log("Store.getScreenSize().height = ", Store.getScreenSize().height)

        this.setState({ 'topOffset': Store.getScreenSize().height/5 })
    },
    getStyle:function(){
        return {
            "MsTransform": this.getOffset(),
            "WebkitTransform": this.getOffset(),
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
           <p>Hello - I'm Graham. Lovely to see you.</p>
           <p>I'm a software engineer.</p>
           <p>I play the bass.</p>
        </div>
    }
})

module.exports = MainPage;