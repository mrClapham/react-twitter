var Dispatcher  = require('./dispatcher');
var merge       = require('react/lib/merge');
var promises    = require('es6-promises/promise')

var AppDispatcher = merge(Dispatcher.prototype, {
    handleViewAction:function(action){
        //this.dispatch({source:"VIEW_ACTION", action:action})
        console.log("AppDispatcher ,action",action)
        //console.log("AppDispatcher ,action",this.dispatch)
        this.dispatch({actionType:"VIEW_ACTION", action:{}})
    }
});

module.exports = AppDispatcher;