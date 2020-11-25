    /* Submit Response */
var first;
var last;
var mail;
var number;
var pass;
function sendResponse() {

    if (validateForm()) {
    pass = passCheck();
    console.log("attempting upload");
        console.log(pass + "\n" + first + " " + last + "\n" + mail + "\n" + number);
        sendAnswersToDatabase();
    /* ================================================================
       From here, it needs to upload the variables as a Response.
       
       The variables first, last, mail, and number all contain a string
       The variable pass contains a boolean (True = passed the test)
       
       ===============================================================*/
    } else {
        alert("Please fill in your contact information");
    }

}

function validateForm() {
    first = document.getElementById("firstName").value;
    last = document.getElementById("lastName").value;
    mail = document.getElementById("email").value;
    number = document.getElementById("phoneNumber").value;
    if ((first == "") || (last == "")
            || (mail == "") || (number == "")) {
        return false;
    } else {
        return true;
    }
}

function passCheck() {
    var q1 = $('#no1').is(':checked') ? 1 : 0;
    var q2 = $('#no2').is(':checked') ? 1 : 0;
    var q3 = $('#no3').is(':checked') ? 1 : 0;
    var q4 = $('#no4').is(':checked') ? 1 : 0;
    var q5 = $('#no5').is(':checked') ? 1 : 0;
    var q6 = $('#no6').is(':checked') ? 1 : 0;
    var q7 = $('#no7').is(':checked') ? 1 : 0;

    if ((q1 == 1) && (q2 == 1)
        && (q3 == 1) && (q4 == 1)
        && (q5 == 1) && (q6 == 1)
        && (q7 == 1))
    {
        return true;
    } else {
        return false;
    }
}