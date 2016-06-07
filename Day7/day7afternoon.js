// change the color of the text in the div with class "color-div" to red
function changeColor() {
	$(".color-div").css("color", "red");
	
}

// add the word "blue" to the div with class "add-div"
function addToDiv() {
		$(".add-div").text("My favorite color is blue");
}

// add a title to the page
function addTitle() {
	$(".title-div").text("Yo this is my title");
}

// alert the text in the selected item of the dropdown
function getSelected() {
	var selected = $("#selector option:selected").text();
	alert(selected);

}

// change the title to be "New Title"
function changeText() {
	$(".title-div").text("New Title");
}

$(document).ready(function() {

  $('.the-button').click(function(){ 
    //hint: what goes in here?
      	$(".the-button").css("color", "blue");
  	

	});

$('.get-selected').click(function(){ 
    //hint: what goes in here?
      	getSelected();
  	

	});
$('.text-changer').click(function(){ 
    //hint: what goes in here?
      	changeText();
  	

	});
changeColor();
addToDiv();
addTitle();



    $(".trio").click(function (e) {
   //hint: look at the currentTarget property
   $(".clicked-id").html("you clicked on id:" + $(this).attr("id"));

 });


});