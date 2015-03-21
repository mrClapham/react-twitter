var AppDispatcher = require("../dispatchers/app-dispatcher");
var constatnt = require("../constants/app-contatnts");
var merge = require("react/lib/merge");
var EventEmmitter = require("events").EventEmmitter;

var CHANGE_EVENT = "changeEvenet";

var testData = [
    {name: "Item one"},
    {name: "Item two"},
    {name: "Item three"},
    {name: "Item four"},
    {name: "Item five"}
]