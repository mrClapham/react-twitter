var superagent = require('superagent');
var jsonp= require('jsonp');

var twitterMethod = "http://flickr.people.getPublicPhotos"
var twitterMethod = "https://api.flickr.com/services/rest"

var twitterConfig = {
    format: 'json',
    api_key : 'd23e3c81ed9f44cac507a5cbd80ea12c',
    user_id: '123487996@N08',
    per_page : 30,
    page: 2,
    min_taken_date : "2005-01-01 00:00:00",
    jsoncallback: 'JSON_CALLBACK'
    //extras : 'date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
}

FlickerApi = {
    getFlickr:function(){
        console.log("Get Flickr Called..");
        var data = jsonp(twitterMethod, twitterConfig, function(req, error){
            if (req) console.log("REQ ", req);
            if (error) console.log("ERROR ",error);
        });
    }
}

module.exports = FlickerApi;