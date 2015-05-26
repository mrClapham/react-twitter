var AppConstants = require("../constants/app-constatnts");
var AppDispatcher = require("../dispatchers/app-dispatcher");

var FlikrActions = {
    showPresonalFlickr:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.FLIKR_RESULT_CHANGED, value:value})
    },
    flikrSearchChanged:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.FLIKR_RESULT_CHANGED, value:value})
    },
    changeGallery:function(value){
        console.log("Action - Gallery ")
        AppDispatcher.handleViewAction(AppConstants.FLIKR_GALLERY_CHANGED, value)

    },
    changeMainImage:function(value){
        console.log("Action - IMAGE ")
        AppDispatcher.handleViewAction(AppConstants.FLIKR_MAINIMAGE_CHANGED, value)
    }
}

module.exports = FlikrActions;