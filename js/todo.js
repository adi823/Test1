/**
 * Data layer for TODO list
 *
 * CRUD (create, read, update, delete)
 * using localStorage as persistence
 */

todoData = {
 	/** returns all todos */
 	list: function() {
 		console.debug('[TODO.JS] list todos');
	    var _todos = [];
	    if (localStorage.getItem('todos')) {
	        _todos = JSON.parse(localStorage.getItem('todos'));
	    }
	    return _todos;
 	},
 	/** creates todo */
 	create: function(title, state) {

 	},
 	read: function(index) {

 	},
 	update: function(index, todo) {

 	},
 	delete: function(index) {

 	}
};

