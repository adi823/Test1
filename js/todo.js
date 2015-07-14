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
         var taskLabelText = $('.newTask').val();
         // Update data model
		 var todo = {
		     title: taskLabelText,
		     state: "TODO"
		 };
		     todos.push(todo);
		     console.debug('TODO array %o', todos);
		     localStorage.setItem("todos", JSON.stringify(todos));
		     updateView();

 	},

 	read: function(index) {

 		

 	},
 	update: function(index, todo) {

 		 $(".list").empty();
    	 for (var i=0; i<todos.length; i++) {
    	 renderTask(todos[i]);
		}
 		   
	},
 
	
 	delete: function(index) {

 		var index = $(this).parent().prevAll('.task').length;
    	console.debug("delete entry %d", index);
    	if (index < 0 || index >= todos.length) {
        console.warn('index out of bounds');
        return;
    }
   		todos.splice(index, 1);
   		storeTodos(todos);

    	//$(this).parent().remove();
   		updateView();
 	}

};

