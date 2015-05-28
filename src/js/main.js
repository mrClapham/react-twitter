// using React v0.12.2
// -- needs jQuery and I want to avid it --var BootstrapDropdown   = require('bootstrap/js/dropdown')
var APP                 = require('./components/app');
var GenericButton       = require('./components/GenericButton');
var Navigagtion         = require('./components/navigation');
var MainApp             = require('./components/MainApp');
//var PreloadApp           = require('./components/Preloader');
var FlikrComponent      = require('./components/flikr/FlikrComponent')

var React               = require('react');
var Flux                = require('flux');


React.render(
    <MainApp  />,
    document.getElementById("main-app")
);



React.render(
    <Navigagtion  />,
    document.getElementById("navigation")
);



//React.render(
//    <PreloadApp />,     document.getElementById("preload")
//)

