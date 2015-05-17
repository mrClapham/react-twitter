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
var publicGalleriesSetsMethod = "flickr.collections.getTree";
var publicGalleriesMethod = "flickr.photosets.getList";
var publicGalleriesGetPhotosMethod = "flickr.photosets.getPhotos";

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
    extras : 'date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o'
}

var _flickrConfigPublicGalleriesCollection = {
    method: publicGalleriesSetsMethod,
    format: 'json',
    api_key : api_key,
    user_id: user_id
}


var _flickrConfigPublicGalleries = {
    method: publicGalleriesMethod,
    format: 'json',
    api_key : api_key,
    user_id: user_id
}

var _flickrConfigPublicGalleriesGetPhotos = {
    method: publicGalleriesGetPhotosMethod,
    format: 'json',
    api_key : api_key,
    user_id: user_id,
    extras : 'date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o'
}


var _publicPhotosAll = [];
var _publicGalleryPhotos = [];
var _publicGalleries = [];
var _publicGalleryCollections = [];

//-- is the gallery in the process of changing?

var _galleryLoading = true;


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
        return _publicPhotosAll;
    },
    getPublicGalleries: function(){
        return _publicGalleries;
    },
    getGalletyLoading:function(){
       return  _galleryLoading;
    },
    onFlikrGalleryChanged:function(value){

    },
    onFlikrResultChanged:function(value){

    },

    loadPublicPhotos:function(){
        JSONP(_flickrStandardRestMethod,_flickrConfigPublicPhotos,'jsoncallback',function(json){
            console.log("Store Function func ",json);
            _publicPhotosAll = json.photos.photo;
            AppDispatcher.handleViewAction(AppConstatnts.FLICKR_STORE_UPDATED, json);
            return json;
        });
    },
    loadPublicGalleriesCollections:function(){
        JSONP(_flickrStandardRestMethod,_flickrConfigPublicGalleriesCollection,'jsoncallback',function(json){
            console.log("Store Function Galleries List",json);
            _publicGalleryCollections = json.collections.collection;
            AppDispatcher.handleViewAction(AppConstatnts.FLICKR_STORE_UPDATED, json);
            return json;
        });
    },
     loadPublicGalleries:function(){
        JSONP(_flickrStandardRestMethod,_flickrConfigPublicGalleries,'jsoncallback',function(json){
            console.log(">>>>Store Function Galleries ",json);
            _publicGalleries = json.photosets.photoset;
            AppDispatcher.handleViewAction(AppConstatnts.FLICKR_STORE_UPDATED, json);
            return json;
        });
    },
    loadPublicGalleriesGetImages:function(id){
        console.log("Loading gallery ", id)
        _galleryLoading = true;
        AppDispatcher.handleViewAction(AppConstatnts.FLIKR_GALLERY_CHANGING, null);
        _flickrConfigPublicGalleriesGetPhotos.photoset_id = String(id);
        JSONP(_flickrStandardRestMethod,_flickrConfigPublicGalleriesGetPhotos,'jsoncallback',function(json){
          //  if (json && json.photoset && json.photoset.photo){
                console.log("WAWAWAWAW Store Function _publicPhotosAll ",_publicPhotosAll);
                _publicPhotosAll = json.photoset.photo;
                _galleryLoading = false;

            AppDispatcher.handleViewAction(AppConstatnts.FLICKR_STORE_UPDATED, json);
           // };
            return _publicGalleryPhotos ;
        });
    },
    dt:AppDispatcher.register(function(payload){
        console.log("FLIKR_PAYLOAD -----", payload)
        var action = payload.action;
        switch(action.actionType){
            case AppConstatnts.FLIKR_RESULT_CHANGED :
                onFlikrResultChanged(action.value)
                break;
            case AppConstatnts.FLIKR_GALLERY_CHANGED :
                onFlikrGalleryChanged(action.value)
                break;
        }
        FlikrStore.emitChange();
        return true;
    })
})

module.exports = FlikrStore;
