var AppDispatcher = require("../dispatchers/app-dispatcher");
var AppConstatnts = require("../constants/app-constatnts");
var merge = require("react/lib/merge");
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


console.log("STOR INIT")

var _increaseCount = function(value){
    _innerCount += value;
    console.log(_innerCount);
}

var AppStore = merge(EventEmmitter.prototype, {
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
    }
})
console.log(AppDispatcher)


AppDispatcher.register(function(payload) {
    console.log(payload)
});


module.exports = AppStore;