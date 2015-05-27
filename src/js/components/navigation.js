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
                   <a className="navbar-brand" href="#">Graham Clapham</a>
               </div>
               <div id="navbar" className="navbar-collapse collapse">
                   <ul className="nav navbar-nav">
                       <li className="active"><a href="#">Home</a></li>
                       <li><a href="#/users/">users</a></li>
                       <li><a href='/#/flikr/'> Go to Flikr </a></li>

                       <li><a href="#contact">Contact</a></li>
                       <li className="dropdown">
                           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                           <ul className="dropdown-menu" role="menu">
                               <li><a href="#">Action</a></li>
                               <li><a href="#">Another action</a></li>
                               <li><a href="#">Something else here</a></li>
                               <li className="divider"></li>
                               <li className="dropdown-header">Nav header</li>
                               <li><a href="#">Separated link</a></li>
                               <li><a href="#">One more separated link</a></li>
                           </ul>
                       </li>
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
