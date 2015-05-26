/** @jsx React.DOM */

var React           = require('react');
var Router          = require('react-router-component');
var UserPage        = require('../components/UserPage');
var MainPage        = require('../components/MainPage');
var FlikrPage       = require('../components/flikr/FlikrComponent');
var AppActions      = require('../actions/app-actions')

var NotFound        = Router.NotFound;
var NotFoundPage    = require('../components/NotFoundPage');
var Locations       = React.createFactory(Router.Locations);
var Location        = React.createFactory(Router.Location);

var MainApp = React.createClass({
    onNavigate : function(e) {
        console.log("Nav Function ",e);
        AppActions.navigate(e);
    },

    render: function() {
        return (
            <div class='location-holder' >
            <h1>Here is the main content</h1>
            <Locations hash onBeforeNavigation={this.onNavigate}>
                <Location path="/" handler={MainPage} />
                <Location path="/main/" handler={MainPage} />
                <Location path="/users/" handler={UserPage} />
                <Location path="/flikr(/*)" handler={FlikrGalleries} />
                <NotFound handler={NotFoundPage} />
            </Locations>
           </div>
        )
    }
})


var FlikrGalleries = React.createClass({
    render: function() {
        return (
            <Locations contextual>
                <Location path="/" handler={FlikrPage} />
                <Location path="/:gallery" handler={FlikrPage} />
                <Location path={/\/([0-9]*)\/([0-9]*)/}  matchKeys={['gallery', 'galleryImage']} handler={FlikrPage} />
                <Location path={/\/([0-9]*)\/([0-9]*)\/([0-9]*)/}  matchKeys={['gallery', 'galleryImage', 'mainImage']} handler={FlikrPage} />
            </Locations>
            )
    }
})

module.exports  = MainApp;
