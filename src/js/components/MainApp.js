/** @jsx React.DOM */

var React                   = require('react');
var Router                  = require('react-router-component');
var UserPage                = require('../components/UserPage');
var MainPage                = require('../components/MainPage');
var FlikrPage               = require('../components/flikr/FlikrComponent');
var Experiments             = require('../components/experiments/Experiments');
var FlockExperiments        = require('../components/experiments/FlockExperiment');
var SpirographExperiments   = require('../components/experiments/SpirographExperiments');
var AppActions              = require('../actions/app-actions');

var NotFound                = Router.NotFound;
var NotFoundPage            = require('../components/NotFoundPage');
var Locations               = React.createFactory(Router.Locations);
var Location                = React.createFactory(Router.Location);
var MainApp = React.createClass({
    onStartNavigate : function(e) {
        console.log("Nav Function started ",e);
        AppActions.navigateStart(e);
    },

    onNavigate : function(e) {
        console.log("Nav Function ended ",e);
        AppActions.navigateEnd(e);
    },
    onResize:function(){
        AppActions.screenResized();
    },
    componentDidMount:function(){
        window.addEventListener("resize", this.onResize, true);
    },
    componentWillUnmount:function(){
        // window.removeEventListener("resize", this.onResize, true);
    },

render: function() {
        return (
            <div class='location-holder' >
            <Locations hash onBeforeNavigation={this.onStartNavigate} onNavigation={this.onNavigate}    >
                <Location path="/" handler={MainPage} />
                <Location path="/main/" handler={MainPage} />
                <Location path="/users/" handler={UserPage} />
                <Location path="/flikr(/*)" handler={FlikrGalleries} />
                <Location path="/experiments/" handler={Experiments} />
                <Location path="/experiments/flock/" handler={FlockExperiments} />
                <Location path="/experiments/spirograph/" handler={SpirographExperiments} />
                <NotFound handler={NotFoundPage} />
            </Locations>
           </div>
        )
    }
});

//var ExperimentGalleries = React.createClass({
//    render:function(){
//        return             <Locations contextual>
//            <Location path="/" handler={FlikrPage} />
//            <Location path="/:experiments" handler={FlikrPage} />
//            <Location path={/\/([0-9]*)\/([0-9]*)/}  matchKeys={['gallery', 'galleryImage']} handler={FlikrPage} />
//            <Location path={/\/([0-9]*)\/([0-9]*)\/([0-9]*)/}  matchKeys={['gallery', 'galleryImage', 'mainImage']} handler={FlikrPage} />
//        </Locations>
//    }
//})

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