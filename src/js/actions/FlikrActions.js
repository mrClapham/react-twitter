var AppConstants = require("../constants/app-constatnts");
var AppDispatcher = require("../dispatchers/app-dispatcher");

var FlikrActions = {
    showPresonalFlickr:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.FLIKR_RESULT_CHANGED, value:value})
    },
    flikrSearchChanged:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.FLIKR_RESULT_CHANGED, value:value})
    }
}


module.exports = FlikrActions;