// using React v0.12.2


var APP                 = require('./components/app');
var GenericButton       = require('./components/GenericButton');
var DashBoard           = require('./components/DashBoard');
var MainApp             = require('./components/MainApp');
var TwitterComponent    = require('./components/twitter/TwitterComponent');
var flickerApi          = require('./utils/FlickrApi');

var FlikrComponent      = require('./components/flikr/FlikrComponent')

var React               = require('react');
var Flux                = require('flux');


React.render(
    <APP  />,
    document.getElementById("main")
);

React.render(
    <GenericButton  />,
    document.getElementById("sub")
);

React.render(
    <DashBoard  />,
    document.getElementById("dash")
);

React.render(
    <TwitterComponent />, document.getElementById('twitter')
)

//React.render(
//    <FlikrComponent />, document.getElementById('flikr')
//)

React.render(
    <MainApp  />,
    document.getElementById("main-app")
);
//flickerApi.getFlickr('donkey');

React.renderComponent(React.createElement(MainApp), document.getElementById("main-app") );





