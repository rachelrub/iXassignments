$(document).ready(function(){
	$("#submit-btn").click(function(){ 
        phoneValidator($("#phone").val());
        emailValidator($("#email").val());

});

$("#sumbit-btn").click(function(){ 
});


function newPhone(value) {
    var phone = value.split("-");
    var areaCode = parseInt([0], 10),
        mid = parseInt([1], 10),
        end = parseInt([2], 10);
    return new Date(areaCode, mid, end);
}
	
$("#phone").validate( {

});

$("#email").validate({

});

