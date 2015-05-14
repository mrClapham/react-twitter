/**
 * Flikr-store Created by grahamcapham on 10/05/2015.
 */
var AppDispatcher = require("../dispatchers/app-dispatcher");
var AppConstatnts = require("../constants/app-constatnts");
var assign = require('object-assign');
var EventEmmitter = require("events").EventEmitter;
require('../utils/JSONP');
var FlikrApi = require('../utils/FlickrApi');

require('../utils/JSONP');
var Q = require('q');

var FLIKR_CHANGE_EVENT = "FlikrchangeEvenet";

var api_key = 'd23e3c81ed9f44cac507a5cbd80ea12c',
    user_id = '123487996@N08'

var _flickrStandardRestMethod = "https://api.flickr.com/services/rest";
var publicPhotosMethod = "flickr.people.getPublicPhotos";

var _page = 1;
var _perPage = 30;

var _flickrConfigPublicPhotos = {
    method: publicPhotosMethod,
    format: 'json',
    api_key : api_key,
    user_id: user_id,
    per_page : _perPage,
    page: _page,
    min_taken_date : "2005-01-01 00:00:00",
    extras : 'date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
}


var _publicGallery = [];


var FlikrStore = assign({}, EventEmmitter.prototype, {
    emitChange:function(){
        this.emit(FLIKR_CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(FLIKR_CHANGE_EVENT, callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(FLIKR_CHANGE_EVENT, callback);
    },
    getFlikrPublicPhotos:function(){
        return _publicGallery
    },
    onFlikrGalleryChanged:function(value){

    },
    onFlikrResultChanged:function(value){

    },
    loadPublicPhotos:function(){
        JSONP(_flickrStandardRestMethod,_flickrConfigPublicPhotos,'jsoncallback',function(json){
            console.log("Store Function func ",json);
            _publicGallery = json.photos.photo;
            AppDispatcher.handleViewAction(AppConstatnts.FLIKR_RESULT_CHANGED, json)
            return json;
        });
    },
    dt:AppDispatcher.register(function(payload){

        console.log("FLIKR_PAYLOAD -----", payload)
        var action = payload.action;
        switch(action.actionType){
            case AppConstatnts.FLIKR_RESULT_CHANGED :
                onFlikrReultChanged(action.value)
                break;
        }
        FlikrStore.emitChange();
        return true;
    })
})

module.exports = FlikrStore;
