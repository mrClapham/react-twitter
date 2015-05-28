var AppDispatcher = require("../dispatchers/app-dispatcher");
var AppConstatnts = require("../constants/app-constatnts");
var merge = require("react/lib/merge");
var assign = require('object-assign');

var EventEmmitter = require("events").EventEmitter;

var CHANGE_EVENT = "changeEvenet";

var _testData = [
    {name: "Item one"},
    {name: "Item two"},
    {name: "Item three"},
    {name: "Item four"},
    {name: "Item five"}
]

var _innerCount = 3;
var _isLoading = true;
var _screenSize = {width:100, height:100}

var _increaseCount = function(value){
    _innerCount += value;
    console.log(_innerCount);
}


var AppStore = assign({}, EventEmmitter.prototype, {
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    getTestData:function(){
        return _testData
    },
    getInnerCount:function(){
        return _innerCount;
    },
    getIsLoading:function(){
        return _isLoading;
    },
    setIsLoading:function(value){
         _isLoading = value;
//        AppDispatcher.handleViewAction(AppConstatnts.LOADING_STATE_CHANGE, _isLoading);
    },

    getScreenSize:function(){
        return {width: window.innerWidth, height:window.innerHeight}
    },
    dt:AppDispatcher.register(function(payload){

        console.log("PAYLOAD -----", payload)
                var action = payload.action;
                switch(action.actionType){
                    case AppConstatnts.TEST_CHANGED :
                        _increaseCount(action.value)
                    break;
                    case AppConstatnts.NAVIGATE_START :
                        _isLoading = true;
                        break;
                    case AppConstatnts.NAVIGATE_END :
                        _isLoading = false;
                        break;
                    case AppConstatnts.SCREEN_RESIZED :
                        _screenSize = action.value;
                        break
        }
        AppStore.emitChange();
        return true;
    })
})

module.exports = AppStore;


/*



 ,
 dt:AppDispatcher.register(function(payload){

 console.log("PAYLOAD ")
 //        var action = payload.action;
 //        switch(action.actionType){
 //            case AppConstatnts.TEST_CHANGED :
 //                _increaseCount(payload.value)
 //            break;

 // }
 //AppStore.emitChange();
 return true;
 })
 */