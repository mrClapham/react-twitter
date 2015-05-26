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
        HELLO I AM THE MAIN PAGE
        <Flock />
        </div>
    }

})


////--- Flocking Boids


var Flock = React.createClass({
    componentDidMount:function(){
        var targ = document.getElementById("boids")
        var _flock = new BoidFlock(targ, {flockSize:200, width:2000, height:1000, backgroundColour:{r:0,g:0,b:0} });
        _flock.setAttractorGrid(4, 4);
    },
    render:function(){
        return <div id="boids"> <h1>I am the flocking boid....</h1></div>
    }
})



module.exports = MainPage;