/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store')

var APP =
    React.createClass({
        proptypes:{
            txt:React.PropTypes.string,
            count:React.PropTypes.number
        },
        getDefaultProps:function(){
            return {txt:'default txt', count:22}
        },
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
            console.log("CHANGE ------------------- ", AppStore.getInnerCount())
            this.setState({count: AppStore.getInnerCount()})
        },
        update:function(){
            this.setState({txt: e.target.value})
            this.setState({count: AppStore.getInnerCount()})
        },

        render:function(){
            //get the value form the inline props...
            var txt = this.props.txt
            return <h1>My App: {txt} {this.state.count}</h1>
        }
    });

module.exports = APP;
