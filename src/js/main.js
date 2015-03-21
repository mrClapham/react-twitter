var APP     = require('./components/app');
var GenericButton   = require('./components/GenericButton')
var React   = require('react');
var Flux    = require('flux');

React.render(
    <APP  />,
    document.getElementById("main")
);

React.render(
    <GenericButton  />,
    document.getElementById("sub")
);




