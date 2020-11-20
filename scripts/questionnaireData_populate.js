$(document).ready(function () {

class Response {
    constructor(firstName, lastName, phoneNumber, pass) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.pass = pass;
    }
}

//Incoming questionnaires
var floodSource;
floodSource = [new Response("John", "Smith", "555 555 5555", false), new Response("Fake", "Person", "555 555 5555", true),
    new Response("Test", "Subject", "555 555 5555", true)];

if (Array.isArray(floodSource)) {
    var i;
    var currentContainer;
    var tmp;
    var contentMain = $("#questionnaireContent");

    $("#questionnaireContent").append("<h1>Your responses:</h1>");

    for (i = 0; i < floodSource.length; i++) {
        console.log("flooding");
        currentContainer = $('<div/>').appendTo("#questionnaireContent");
        $("<h1/>").appendTo(currentContainer).html(floodSource[i].firstName + " " + floodSource[i].lastName);
        $("<h1/>").appendTo(currentContainer).html(floodSource[i].phoneNumber);
        if (floodSource[i].pass == false) {
            $(currentContainer).css("background-color", "red");
        }
    }
} else {
    $("#questionnaireContent").append("<h1>There are currently no responses</h1>");
}

});