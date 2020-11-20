$(document).ready(function () {

class Questionnaire {
    constructor(title, qty) {
        this.title = title;
        this.qty = qty;
    }
}

//Incoming questionnaires
var floodSource;
floodSource;// = [new Questionnaire("Placeholder Questionnaire", 5), new Questionnaire("The User would probably only have one of these.", 55),
    //new Questionnaire("On Click should construct the results", 0)];

if (Array.isArray(floodSource)) {
    var i;
    var currentContainer;
    var tmp;
    var contentMain = $('#homeContent');
    for (i = 0; i < floodSource.length; i++) {
        console.log("flooding");
        currentContainer = $('<div/>').appendTo("#homeContent");
        $('<h1/>').appendTo(currentContainer).html(floodSource[i].title);
        $('<span/>').appendTo(currentContainer).html("Number of responses: ");
        $('<span/>').appendTo(currentContainer).html(floodSource[i].qty);
    }
} else {
    $('<h1/>').appendTo('#homeContent').html("You haven't set up a questionnaire");
    $('<a/>').appendTo('#homeContent').attr("href", "createQuestionnaire.html").html("Create One");
}

});