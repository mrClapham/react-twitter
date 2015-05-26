var AppConstants = require("../constants/app-constatnts");
var AppDispatcher = require("../dispatchers/app-dispatcher")

var AppActions = {
    testAction:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.TEST_CHANGED, value:value})
    },
    testAction2:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.STATE_CHANGE, value:value})
    },
    navigate:function(value){
        console.log("app-actions - Actions navigate...")
        AppDispatcher.handleViewAction({actionType:AppConstants.NAVIGATE, value:value})
    }
}

module.exports = AppActions;
