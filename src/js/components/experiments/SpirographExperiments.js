/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");
var Dat = require("dat-gui");
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
        return     {"MsTransform": this.getScale(),
                    "WebkitTransform": this.getScale(),
                    "transform": this.getScale(),
                    "width": this.props.spiroData.width,
                    "margin": "0 auto"
                    }
    },
    componentDidMount:function(){
        if(!this.props._spiro) this.props._spiro = new SpiroGraph( 'spirograph-exp' );
        Store.addChangeListener(this.onChange)

        // GUI
        if (!this.state._gui ) this.state._gui = new Dat.GUI({ autoPlace: true });
        this.state.customContainer = document.getElementById("datHolder");
        this.state.customContainer.appendChild(this.state._gui.domElement);

    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange);
    },

    render:function(){
        return (
            <div>
                <div id="datHolder">DAT - HOLDER </div>

                <div style={this.getStyle()}>
                <div id="spirograph-exp"></div>
            </div>
            </div>
            )
    }
})

module.exports = SpirographExperiment;