/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store')

var APP =
    React.createClass({
        proptypes:{
            txt:React.PropTypes.string,
            count:React.PropTypes.number
        },
        // The props are set not to change
        getDefaultProps:function(){
            return {propTxt:'default txt', count:22}
        },
        // The state is mutable and takes
        getInitialState:function(){
            return { txt: "this is the initial state.",
            count: AppStore.getInnerCount(),
            id:0
            }
        },
        componentWillMount:function(){
            AppStore.addChangeListener(this._onChange)
        },
        _onChange:function(){
            this.setState({count: AppStore.getInnerCount()})
        },
        render:function(){
            //get the value form the inline props...
            var txt = this.props.txt
            return <h3>My App: {this.state.txt} {this.state.count}</h3>
        }
    });

module.exports = APP;
