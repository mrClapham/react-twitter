/** @jsx React.DOM */
var APP     = require('./components/app');
var React   = require('react');
var Flux    = require('flux');

React.renderComponent(
    <APP  />,
    document.getElementById("main")
);

