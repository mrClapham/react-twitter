var AppConstants = require("../constants/app-constatnts");
var AppDispatcher = require("../dispatchers/app-dispatcher")

var AppActions = {
    testAction:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.TEST_CHANGED, value:value})
    },
    testAction2:function(value){
        AppDispatcher.handleViewAction({actionType:AppConstants.STATE_CHANGE, value:value})
    },

    navigateStart:function(){
        console.log("app-actions - Actions navigate start ...")
        AppDispatcher.handleViewAction({actionType:AppConstants.NAVIGATE_START, value:null})
    },

    navigateEnd:function(){
        console.log("app-actions - Actions navigate end...")
        AppDispatcher.handleViewAction({actionType:AppConstants.NAVIGATE_END, value:null})
    },

    screenResized:function(){
        var value = {"width": window.innerWidth, "height":window.innerHeight}
        AppDispatcher.handleViewAction({actionType:AppConstants.SCREEN_RESIZED, value:value})
    }
}

module.exports = AppActions;

