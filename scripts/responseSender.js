    /* Submit Response */
var first;
var last;
var mail;
var number;
var pass;
function sendResponse() {

    if (validateForm()) {
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
