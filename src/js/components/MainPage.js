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

    render:function(){
        return <div class="main-page">
        <Flock />
        </div>
    }
})

////--- Flocking Boids

var Flock = React.createClass({
    getInitialProps:function(){
        return {flockHolder : null, flock: null}
    },
    componentDidMount:function(){
        this.props.flockHolder = document.getElementById("boids")
        this.props._flock = new BoidFlock(this.props.flockHolder, {flockSize:200, width:1140, height:900, backgroundColour:{r:200,g:0,b:0} });
        //_flock.setAttractorGrid(4, 4);
    },
    render:function(){
        return <div id="boids">
        <h1>HELLO FROM THE FLOCK</h1>
        <h1>HELLO FROM THE FLOCK</h1>
        <h1>HELLO FROM THE FLOCK</h1>
        <h1>HELLO FROM THE FLOCK</h1>
        </div>
    }
})



module.exports = MainPage;