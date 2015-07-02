$(document).ready(function(){

	$(".btnCreate").click(createTask)
    
    $(".newTask").keypress(function(key){

    	if(key.which == 13) createTask();
    }).focus();

});

// Clone the template task, insert data, append it to the task list
var createTask = function(){
	console.debug('createTask');
   
    var taskElement = $(".template .task").clone();
    var taskLabelText = $(".newTask").val();
    if(taskLabelText == " "){
        console.warn("empty tasks are not created");
        $(".title-missing-alert").removeClass("hidden").fadeIn(0).fadeOut(6000);
        return;
    }
    taskElement.find(".taskLabel").text(taskLabelText);
    taskElement.find(".btnDeleteTask").click(deleteTask);
    taskElement.find(".btnStatusTask").click(toggleTaskStatus);
    console.debug("create task %s, from element %o", taskLabelText, taskElement);
    $(".list").append(taskElement);
    $(".newTask").val(" ").focus();
};

// Delete an existing task from the task list
var deleteTask = function(){
    console.debug("delete entry %0", this);
    $(this).parent().remove();
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