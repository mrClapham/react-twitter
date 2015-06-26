'use strict';
var AppConstants    = require("../constants/app-constatnts");
var AppDispatcher   = require("../dispatchers/app-dispatcher");
var Store           = require("../stores/Flikr-store");

var FlikrActions = {
    showPresonalFlickr:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.FLIKR_RESULT_CHANGED, value:value});
    },
    flikrSearchChanged:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.FLIKR_RESULT_CHANGED, value:value});
    },
    changeGallery:function(value){
        console.log("Action - Gallery ")
        AppDispatcher.handleViewAction(AppConstants.FLIKR_GALLERY_CHANGED, value);

    },
    changeMainImage:function(value){
        console.log("Action - IMAGE ")
        AppDispatcher.handleViewAction(AppConstants.FLIKR_MAINIMAGE_CHANGED, value);
    },
    gridUpGallery:function() {
        if (Store.getPublicGalleries()) {
            console.log("THE AMMOUNT OF IMAGES IN THE GALLERY ARE ",Store.getPublicGalleries().length)
            let _gridLength = Math.ceil(Math.sqrt(Store.getPublicGalleries().length)), xPos=0,yPos=0;
            Store.getPublicGalleries().map( function(d,i){
                d.x=xPos; d.y=yPos

                if(xPos < _gridLength){
                    xPos++
                }else{
                    xPos= 0;
                    yPos++;
                }
            });
        }
    }
}

module.exports = FlikrActions;