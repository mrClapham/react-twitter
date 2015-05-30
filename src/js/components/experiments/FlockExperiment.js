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
        return { _width:1400}
    },
    getInitialState:function(){
        return {flockHolder : null, flock: null, flockPlaying: true}
    },
    getStyle:function(){
    return {"width" : this.props._width+'px', "margin":"0 auto"}
    },
    togglePlay:function(){

        if(this.state._flock) {
            this.state._flock.togglePlay();
            this.setState({"flockPlaying": this.state._flock.getPlaying() })
        }
        },
    componentDidMount:function(){
        console.log("this.props._width ",this.props._width)
        this.state.flockHolder = document.getElementById("boids-flock")
        if(!this.state._flock){
         this.state._flock = new BoidFlock(
             this.state.flockHolder,
             {flockSize:100, width:this.props._width, height:900, backgroundColour:{r:41,g:41,b:41} }
        );
            this.state._flock.setAttractorGrid(4, 4);
        }else{
            console.log("There ia a canvas already")
        }
    },
    componentWillUnmount:function(){
        if(this.state._flock) this.state._flock.setPlaying(false);
    },
    buttonStyle:function(){
        return {
            "position" : "fixed",
            "top":"200px",
            "left":"200px"
        }
    },
    render:function(){
        return <div id="boids-flock" style = {this.getStyle()}>
            <button style={this.buttonStyle()}
            onClick={this.togglePlay}>{String(this.state.flockPlaying)}</button>
        </div>
    }
})

module.exports = FlockExperiment;