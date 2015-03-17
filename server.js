var embedlr = require('gulp-embedlr'),
    http = require('http'),

refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    Twit = require('twit'),
    livereloadport = 35729,
    serverport = 5000;


var T = new Twit({
    consumer_key: 'OEiqpRWDB5vm2pHu6VgdwKLh3',
    consumer_secret: '8xeCtv3P1mxSbFV43JwHIYInBtJgxovjGFb93g5FVPjtaUZ65L',
    access_token: "35851807-GvCv0ELgvcQZM8hHTyBk9PIsLxDVz8oGtDXkzqdoI",
    access_token_secret: "5NGzACdkgObGDLSAJKLShDYx3jdBn3UzGn8vKU3hFOuda"
});

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist' });
});

server.listen(process.env.PORT || serverport);

