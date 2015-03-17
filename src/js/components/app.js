/** @jsx Ract.DOM */
var React = require('react');

var APP =
    React.createClass({
        proptypes:{
            txt:React.PropTypes.string
        },
        getDefaultProps:function(){
            return {txt:'default txt'}
        },
        getInitialState:function(){
            return { txt: "this is the initial state.",
            id:0
            }
        },
        update:function(){
            this.setState({txt: e.target.value})
        },

        render:function(){
            //get the value form the inline props...
            var txt = this.props.txt
            return <h1>My App {txt}</h1>
        }
    });

module.exports = APP;
