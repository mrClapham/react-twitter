var AppConstants = require("../constants/app-constatnts");
var AppDispatcher = require("../dispatchers/app-dispatcher")

var AppActions = {
    testAction:function(value){
        console.log("function fired");
        AppDispatcher.handleViewAction({actionType:AppConstants.STATE_CHANGE, payload:value})
    },
    testAction2:function(value){
        console.log("function fired");
        AppDispatcher.handleViewAction({actionType:AppConstants.STATE_CHANGE, payload:value})
    }

}


module.exports = AppActions;