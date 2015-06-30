$(document).ready(function(){

	$(".btnCreate").click(createTask)
    
    $(".newTask").keypress(function(key){

    	if(key.which == 13) createTask();
    }).focus();

	
});