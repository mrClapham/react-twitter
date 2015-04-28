var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var promises    = require('es6-promises/promise')

var TwitterDispatcher = assign(new Dispatcher(), {
    handleTwitterAction: function(action) {
        this.dispatch({
            source: 'TWITTER_ACTION',
            action: action
        });
    }
});

module.exports = TwitterDispatcher;