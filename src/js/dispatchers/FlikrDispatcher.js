var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var promises    = require('es6-promises/promise')

var FlikrDispatcher = assign(new Dispatcher(), {
    handleFlikrrAction: function(action) {
        this.dispatch({
            source: 'FLIKR_ACTION',
            action: action
        });
    }
});

module.exports = FlikrDispatcher;