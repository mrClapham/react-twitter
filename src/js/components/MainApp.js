var React       = require('react');
var Router      = require('react-router-component');
var UserPage    = require('../components/UserPage');
var MainPage    = require('../components/MainPage');

var Locations   = React.createFactory(Router.Locations);
var Location    = React.createFactory(Router.Location);

var MainApp = React.createClass({
    render: function() {
        return (
            <Locations>
                <Location path="/" handler={MainPage} />
                <Location path="/users" handler={UserPage} />

            </Locations>
        )
    }
})

module.exports  = MainApp;