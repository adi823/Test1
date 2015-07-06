
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
	console.debug('createTask');

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
};

/** Renders all todo elements with their state */
var updateView = function() {
    $(".list").empty();
    for (var i=0; i<todos.length; i++) {
        renderTask(todos[i]);
    }
};

/** UI operation to add todo data objects to the view */
var renderTask = function(todo) {
   
    var taskElement = $(".template .task").clone();
    var taskLabelText = todo.title;
    if(taskLabelText == " "){
        console.warn("empty tasks are not created");
        $(".title-missing-alert").removeClass("hidden").fadeIn(0).fadeOut(6000);
        return;
    }
    taskElement.find(".taskLabel").text(taskLabelText);
    taskElement.find(".btnDeleteTask").click(deleteTask);
    taskElement.find(".btnStatusTask").click(toggleTaskStatus);
    console.debug("insert task %s, from element %o", taskLabelText, taskElement);
    $(".list").append(taskElement);

};

// Delete an existing task from the task list
var deleteTask = function(){
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

};

var storeTodos = function(_todos) {
    localStorage.setItem("todos", JSON.stringify(_todos));
};

function unstoreTodos() {
    var _todos = [];
    if (localStorage.getItem('todos')) {
        _todos = JSON.parse(localStorage.getItem('todos'));
    }
    return _todos;
};

//Read the currenttask status, then toggle it (task title strikethrough, status icon and color)
var toggleTaskStatus = function(){
    var taskElement = $(this).parent();
    var taskTitle = taskElement.find(".taskLabel").text();

    //figure task status
    var taskStatus = taskElement.data(".taskStatus") || "TODO";
    console.debug("Toggle task(%s) status to %s", taskTitle, taskStatus);

    if(taskStatus == "TODO"){
        taskElement.data(".taskStatus", "DONE");
        taskElement.find(".taskLabel").css("text-decoration", "line-through");
        taskElement.find(".btnStatusTask .glyphicon")
               .removeClass("glyphicon-tasks")
               .addClass("glyphicon-ok")
               .css("color", "green");
    } else {
        taskElement.data("taskStatus", "TODO");
        taskElement.find(".taskLabel").css("text-decoration", "none");
        taskElement.find(".btnStatusTask .glyphicon")
               .removeClass("glyphicon-ok")
               .addClass("glyphicon-tasks")
               .css("color", "#555");

    }
}