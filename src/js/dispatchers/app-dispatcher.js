var Dispatcher  = require('./dispatcher');
var merge       = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
    handleViewAction:function(action){
        this.dispatch({source:"VIEW_ACTION", action:action})
        console.log(action)
    }
});




module.exports = AppDispatcher;