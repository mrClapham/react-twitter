var superagent = require('superagent');
require('../utils/JSONP');
var Q = require('q');

var api_key = 'd23e3c81ed9f44cac507a5cbd80ea12c',
    user_id = '123487996@N08'


var twitterGetPublicMethod = "http://flickr.people.getPublicPhotos"
var twitterStandardRestMethod = "https://api.flickr.com/services/rest"

var publicMethod = "flickr.people.getPublicPhotos";


var twitterConfig = {
    method: publicMethod,
    format: 'json',
    api_key : api_key,
    user_id: user_id,
    per_page : 30,
    page: 2,
    min_taken_date : "2005-01-01 00:00:00"
    //extras : 'date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
}


var _onFlickCalled = function(){
    return 'stageOne';
}

var _onFlickDataReceived = function(value){
    return value +'stageTwo';
}


var _onFlickInit = function(value){
    var _ret = value + 'stageFour'
    console.log(value + 'stageFour')
    return _ret;
}


Q.fcall(_onFlickCalled)
    .then(_onFlickDataReceived)
    .then(_onFlickInit)

FlickerApi = {

    getFlickr:function(){

        JSONP(twitterGetPublicMethod,twitterConfig,'jsoncallback',function(json){
            console.log(json);
        });

        return "hello"
    }
}

module.exports = FlickerApi;