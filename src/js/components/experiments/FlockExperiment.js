/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");

var BoidFlock = require('../../libs/BoidFlock');


var FlockExperiment = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },

    render:function(){
        return <div>
            <Flock />
        </div>
    }
})

////--- Flocking Boids

var Flock = React.createClass({
    getDefaultProps:function(){
        return {flockHolder : null, flock: null, _width:2000}
    },
    getStyle:function(){
    return {"width" : this.props._width+'px', "margin":"0 auto"}
    },
    componentDidMount:function(){
        console.log("this.props._width ",this.props._width)
        this.props.flockHolder = document.getElementById("boids-flock")
        this.props._flock = new BoidFlock(this.props.flockHolder, {flockSize:200, width:this.props._width, height:900, backgroundColour:{r:41,g:41,b:41} });
        this.props._flock.setAttractorGrid(4, 4);
    },
    render:function(){
        return <div id="boids-flock" style = {this.getStyle()}>

        </div>
    }
})

module.exports = FlockExperiment;