/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");

var SpiroGraph = require('../../libs/Spirograph');


var SpirographExperiment = React.createClass({
    getInitialState:function(){
        return {
            _spiroScale:.6,
            spiroData:{
                width:1000,
                height: 1000
            }
        }
    },
    getDefaultProps:function(){
        return {
            _spiro:null,
            _spiroScale:.6,
            spiroData:{
                width:1000,
                height: 1000
            }
        }
    },
    onChange:function(){
        this.setState({_spiroScale: Store.getScreenSize().height} )
    },
    getScale:function(){
        var _scale = (Store.getScreenSize().height / (this.props.spiroData.height * 1.2) );
        return "scale("+_scale+","+_scale+")"
    },
    getStyle:function(){
        return     {"msTransform": this.getScale(),
                    "webkitTransform": this.getScale(),
                    "transform": this.getScale(),
                    "width": this.props.spiroData.width,
                    "margin": "0 auto"
                    }
    },
    componentDidMount:function(){
        if(!this.props._spiro) this.props._spiro = new SpiroGraph( 'spirograph-exp' );
        Store.addChangeListener(this.onChange)
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange);
    },

    render:function(){
        return (
            <div style={this.getStyle()}>
                <div id="spirograph-exp"></div>
            </div>
            )
    }
})

module.exports = SpirographExperiment;