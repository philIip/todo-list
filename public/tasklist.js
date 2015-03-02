$(document).ready(function() {

    $("form").submit(function(event) {
    	var text = $("input:first").val();
    	var select = $("#myselect").val();

        $("#"+select+"-list").append("<div class='task'><span class='del'>[x]</span><span class='"+select+"'> &#9632;</span> "+text+"</div>");
    });

    $("#high-list").on('click', 'div.task span.del', function() {
    	console.log('something');
    	$(this).parent().remove();
    });

    $("#medium-list").on('click', 'div.task span.del', function() {
    	console.log('something');
    	$(this).parent().remove();
    });

    $("#low-list").on('click', 'div.task span.del', function() {
    	console.log('something');
    	$(this).parent().remove();
    });

});