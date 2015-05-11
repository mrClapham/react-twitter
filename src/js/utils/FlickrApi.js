var superagent = require('superagent');
require('../utils/JSONP');
var Q = require('q');

var api_key = 'd23e3c81ed9f44cac507a5cbd80ea12c',
    user_id = '123487996@N08'


var twitterGetPublicMethod = "http://flickr.people.getPublicPhotos"
var _flickrStandardRestMethod = "http://api.flickr.com/services/rest"

var publicPhotosMethod = "flickr.people.getPublicPhotos";


var _flickrConfigPublicPhotos = {
    method: publicPhotosMethod,
    format: 'json',
    api_key : api_key,
    user_id: user_id,
    per_page : 30,
    page: 2,
    min_taken_date : "2005-01-01 00:00:00",
    extras : 'date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
}

var _flikrGalleryConfig =  {
    api_key: 'd23e3c81ed9f44cac507a5cbd80ea12c',
    user_id: '123487996@N08',
    method: "flickr.collections.getTree",
    methodPhotoset_getList:"flickr.photosets.getList",
    methodPhotoset_getPhotos:"flickr.photosets.getPhotos"
}


var _onFlickCalled = function(){
    return 'stageOne';
}

var _onFlickDataReceived = function(value){
    console.log("_onFlickDataReceived callback ..", value )

    return value.photos;
}


var _onFlickInit = function(value){
    var _ret = value.photo
    console.log("FInal callback ..", _ret )
    return _ret;
}


var _getPublicPhotos =  JSONP(_flickrStandardRestMethod,_flickrConfigPublicPhotos,'jsoncallback',function(json){
                                            console.log("Q func ",json);
                                            return json;
                                        });

//Q.fcall(_getPublicPhotos)
//    .then(_onFlickDataReceived)
//    .then(_onFlickInit)

FlickerApi = {

    getFlickr:function(){

        JSONP(_flickrStandardRestMethod,_flickrConfigPublicPhotos,'jsoncallback',function(json){
            console.log(json);
            return json;
        });

        return "hello world"
    }
}

module.exports = FlickerApi;