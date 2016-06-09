$(document).ready(function(){
	$("#submit-btn").click(function(){ 
        phoneValidator($("#phone").val());
        emailValidator($("#email").val());

});
});

function phoneValidator(phoneNum) {
	// I want to check that the form is XXX-XXX-XXXX
	// split by "-"
	// test amt of numbers per section
	// if any section fails, then entire thing is wrong
	// if all sections pass then YAY 
    var phone = phoneNum.split("-");
    console.log(phone);
    if (phone.length !== 3) {
    	$(".testPhone").text("Invalid Phone Number-- TRY AGAIN BITCH");
    }
    else if ((phone[0].length !== 3)||(phone[0] === NaN)) {
    	$(".testPhone").text("Invalid Phone Number-- TRY AGAIN BITCH");
    }
    else if ((phone[1].length !== 3)||(phone[1] === NaN)) {
    	$(".testPhone").text("Invalid Phone Number-- TRY AGAIN BITCH");
    }
    else if ((phone[2].length !== 4)||(phone[2] === NaN)) {
    	$(".testPhone").text("Invalid Phone Number-- TRY AGAIN BITCH");
    }
    else {
    	$(".testPhone").text("Woot Woot nice digets");
    }
}

function emailValidator(email) {
	// mmmmm@mmmmm.mmm
	var e = email.split("@");
	if (e.length !== 2) {
		$(".testEmail").text("Invalid Email -- TRY AGAIN BITCH");
	}
	var com = e[1].split(".");
	if (com.length !==2) {
		$(".testEmail").text("Invalid Email -- TRY AGAIN BITCH");
	}
	else {
		$(".testEmail").text("Congrats good email");
	}
}




	


