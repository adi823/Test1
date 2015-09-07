
var todos = todoData.list(); ///unstoreTodos();
console.debug('Load todo list from localStorage %o', todos);

$(document).ready(function(){

	$(".btnCreate").click(createTask)

    $(".newTask").keypress(function(key){
    	if(key.which == 13) createTask();
    }).focus();

    updateView();

});

// Clone the template task, insert data, append it to the task list
var createTask = function(){
	var title = $('.newTask').val();
	console.debug('createTask(%s)', title);
	todoData.create(title, "TODO");
	updateView();
};

/** Renders all todo elements with their state */
var updateView = function() {
	$(".list").empty();
		for (var i=0; i<todos.length; i++) {
		renderTask(todos[i]);
	}
	$('.debug').text(JSON.stringify(todos, null, 4));
};

/** UI operation to add todo data objects to the view */
var renderTask = function(todo) {

    //var taskElement = $(".template .task").clone();
    var taskLabelText = todo.title;
    if(taskLabelText == " "){
        console.warn("empty tasks are not created");
        $(".title-missing-alert").removeClass("hidden").fadeIn(0).fadeOut(6000);
        return;
    }

		//var source = $('#todo-template').html();

		//var template = Handlebars.compile(source);
		var template = AppTemplates["templates/todos.hbs"];
		context = {
			title: todo.title,
			state: todo.state,
			icon: (todo.state=='TODO') ? 'glyphicon-tasks' : 'glyphicon-ok'
		};

		var taskElement = $(template(context));
		taskElement.find(".btnDeleteTask").click(deleteTask);
    taskElement.find(".btnStatusTask").click(toggleTaskStatus);


    //console.debug("insert task %s, from element %o", taskLabelText, taskElement);
    $(".list").append($(taskElement));

};

// Delete an existing task from the task list
var deleteTask = function(){
    var index = $(this).parent().prevAll('.task').length;
    todoData.delete(index);
 		updateView();
};


//Read the currenttask status, then toggle it (task title strikethrough, status icon and color)
var toggleTaskStatus = function(){
		var index = $(this).parent().prevAll('.task').length;
		todoData.toggle(index);
		updateView();
}
