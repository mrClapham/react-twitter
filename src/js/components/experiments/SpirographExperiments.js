/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");

var SpiroGraph = require('../../libs/Spirograph');


var SpirographExperiment = React.createClass({
    getDefaultProps:function(){
        return {
            _spiro:null,
            _spiroScale:.6,
            spiroData:{
                width:600,
                height: 600
            }
        }
    },
    getScale:function(){
        return "scale("+.6+","+.6+")"
    },
    getStyle:function(){
        return     {"-ms-transform": this.getScale(),
                    "-webkit-transform": this.getScale(),
                    "transform": this.getScale()
                    }
    },
    componentDidMount:function(){
        if(!this.props._spiro) this.props._spiro = new SpiroGraph( 'spirograph-exp' );
    },
    componentWillUnmount:function(){

    },
    render:function(){
        return (
            <div style={this.getStyle()}>
                <h1>I am the spirograph.... </h1>
                <div id="spirograph-exp"></div>
            </div>
            )
    }
})

module.exports = SpirographExperiment;
