/**
 * Data layer for TODO list
 *
 * CRUD (create, read, update, delete)
 * using localStorage as persistence
 */

var storeTodos = function(_todos) {
  localStorage.setItem("todos", JSON.stringify(_todos));
}


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
    if (!title) {
      console.warn('Could not create todo. Title missing.');
      return;
    }
    state = state || "TODO";
    // Update data model
		var todo = {
       title: title,
       state: state
    };
   todos.push(todo);
   console.debug('TODO array %o', todos);
   storeTodos(todos);
 	},

 	read: function(index) {
    // TODO: out of bounds check
    return todos[index];
 	},
  /**
   * Update a single todo
   * Params:
   * @index: the index of the todo
   * @todo: the todo data object
   */
 	update: function(index, todo) {
    todos[index] = todo;
    storeTodos(todos);
  },

  toggle: function(index) {
    todos[index].state = (todos[index].state == "TODO") ? "DONE" : "TODO";
    storeTodos(todos);
  },


 	delete: function(index) {

    	console.debug("delete entry %d", index);
    	if (index < 0 || index >= todos.length) {
        console.warn('index out of bounds');
        return;
    }
    todos.splice(index, 1);
   	storeTodos(todos);
 	}

};
