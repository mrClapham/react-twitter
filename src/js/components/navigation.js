/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var CaptureClicks = require('react-router-component/lib/CaptureClicks')
var Link = require('react-router-component').Link


var Navigagtion = React.createClass({
    proptypes:{},
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
       return          <nav className="navbar navbar-inverse navbar-fixed-top">
           <div className="container">
               <div className="navbar-header">
                   <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                   </button>
                   <a className="navbar-brand" href="#">Mr Graham Clapham</a>
               </div>
               <div id="navbar" className="navbar-collapse collapse">
                   <ul className="nav navbar-nav">
                       <li><a href="#">About </a></li>
                       <li><a href="#/users/">users</a></li>
                       <li><a href='/#/flikr/'> Flikr </a></li>
                       <li><a href='/#/experiments/'> Experiments </a></li>

                       <li><a href="#contact">Contact</a></li>

                           <li><a href="https://github.com/mrClapham" target="_blank"><div className="fa fa-github"></div> </a> </li>
                           <li><a href="http://codepen.io/mrClapham/" target="_blank"><div className="fa fa-codepen"></div> </a> </li>
                           <li><a href="https://www.linkedin.com/pub/graham-clapham/8/420/791" target="_blank"><div className="fa fa-linkedin"></div> </a> </li>
                           <li><a href="mailto:info@gcdesign.co.uk" target="_blank"><div className="fa fa-envelope"></div> </a> </li>
                   </ul>
               </div>
           </div>
       </nav>
    }
})



var NavLink = React.createClass({

        render:function(){
            return (  <li><a href="#about">About</a></li>
                )
        }
    });

module.exports = Navigagtion;
