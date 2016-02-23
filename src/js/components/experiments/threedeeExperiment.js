/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");
var Dat = require("dat-gui");
var ThreeDeeScene = require('threedeescene');

var ThreeDeeExperiment = React.createClass({
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
        return     {"MsTransform": this.getScale(),
            "WebkitTransform": this.getScale(),
            "transform": this.getScale(),
            "width": this.props.spiroData.width,
            "margin": "0 auto"
        }
    },
    componentDidMount:function(){
        Store.addChangeListener(this.onChange);
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange);
    },

    render:function(){
        return (
            <div>

                <div style={this.getStyle()}>
                    <h1>Three Dee Scene</h1>
                </div>
            </div>
        )
    }
})

module.exports = ThreeDeeExperiment;