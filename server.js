var embedlr = require('gulp-embedlr'),
    http = require('http'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    TwitConfig = {    consumer_key: 'OEiqpRWDB5vm2pHu6VgdwKLh3',
        consumer_secret: '8xeCtv3P1mxSbFV43JwHIYInBtJgxovjGFb93g5FVPjtaUZ65L',
        access_token: "35851807-GvCv0ELgvcQZM8hHTyBk9PIsLxDVz8oGtDXkzqdoI",
        access_token_secret: "5NGzACdkgObGDLSAJKLShDYx3jdBn3UzGn8vKU3hFOuda"}
    Twit = require('twit'),
    livereloadport = 35729,
    serverport = 5000;


var T = new Twit(TwitConfig);

console.log("Reading in the last 10 tweets with search: belfast");
T.get('search/tweets', { q: 'belfast', count: 10 }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {
            var status = reply.statuses[i];
            console.log('*************************');
            console.log('  username: ' + status.user.name);
            console.log('   ' + status.text);
            console.log('  time/date: ' + status.created_at);
            console.log('*************************');
        }
    }
})

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));


// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.get('/', function(req, res) {
    res.sendFile('index.html', { root: 'dist' });
});

server.get("/twit", function(req, res){
    res.send("hello world")
})

server.get('/tweets/:term', function(req, res){
    T.get('search/tweets', { q: req.params.term, count: 10 }, function(err, data, response) {
        console.log(req.params.term)
        console.log(data)
        res.send(data)

    })
})




// Create and return the word counts as a JSON object
server.get("/counts.json", function (req, res) {
    redisClient.mget(["awesome", "cool", "rad"] , function (error, results) {
        if (error !== null) {
            // handle error here
            console.log("ERROR: " + error);
        } else {
            var jsonObject = {
                "awesome": results[0],
                "cool": results[1],
                "rad": results[2]
                // ...etc
            };
            // use res.json to return JSON objects instead of strings
            res.json(jsonObject);
        }
    });
});


server.listen(process.env.PORT || serverport);






