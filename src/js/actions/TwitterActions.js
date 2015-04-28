var AppConstants = require("../constants/app-constatnts");
var AppDispatcher = require("../dispatchers/app-dispatcher");

var TwitterActions = {
    searchTwitter:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.STATE_CHANGE, value:value})
    },
    testAction2:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.STATE_CHANGE, value:value})
    }
}


module.exports = TwitterActions;