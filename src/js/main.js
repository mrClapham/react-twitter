/** @jsx React.DOM */
var APP     = require('./components/app');
var React   = require('react');
var Flux    = require('flux');
var Service = require('./utils/Service');

React.render(
    <APP  />,
    document.getElementById("main")
);

