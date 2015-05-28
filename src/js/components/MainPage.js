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
            "margin":"0 auto"

        }
    },

    render:function(){
        return <div style={this.getStyle()}>
            Hello - I'm Graham. Lovely to see you.
        </div>
    }


})

////--- Flocking Boids
//
//var Flock = React.createClass({
//    getInitialProps:function(){
//        return {flockHolder : null, flock: null}
//    },
//    componentDidMount:function(){
//        this.props.flockHolder = document.getElementById("boids")
//        this.props._flock = new BoidFlock(this.props.flockHolder, {flockSize:200, width:1140, height:900, backgroundColour:{r:200,g:0,b:0} });
//        //_flock.setAttractorGrid(4, 4);
//    },
//    render:function(){
//        return <div id="boids">
//        <h1>HELLO FROM THE FLOCK</h1>
//1>
//        </div>
//    }
//})


module.exports = MainPage;