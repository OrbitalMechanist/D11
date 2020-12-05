// JavaScript source code

var questionHTML =
    '<div class="questionWrapper" id="!INSERTVALHERE!">' +
    '<p>!QTEXT!<p/>' +
    '<input type="radio" id="yes!INSERTVALHERE!" name="!INSERTVALHERE!" value="Yes"/>' +
    '<label for="yes!INSERTVALHERE!">Yes</label>' +
    '<input type="radio" id="no!INSERTVALHERE!" name="!INSERTVALHERE!" value="No"/>' +
    '<label for="no!INSERTVALHERE!">No</label>' +
    '</div>';

var targetUID = "QFy8GynXq1coXV8Wdj95gnHXF3f2";
var targetDocRef = db.collection("creators").doc(targetUID).collection("questionnaires").doc("COVID-19 Checklist");
var questions = targetDocRef.get();

var topQuestionIndex = 0;

$(document).ready(function () {
    var storageRef = storage.ref();
    var targetFileRef = storageRef.child("in.png");

    targetDocRef.collection("questions").where("questionText", "!=", "").get().then(function (gotten) {
        var index = 0;
        gotten.forEach(function (doc) {
            // for each document in collection, create a new question and give it
            console.log(doc.id, " => ", doc.data());
            addQuestionAfter($('#description'), index, doc.data().questionText);
            index = ++index;
        });
        topQuestionIndex = index;
    });
    targetDocRef.get().then(function (gotten) {
        $('#title').html(gotten.data().title);
        $('#description').html(gotten.data().summary);
    });
    var dlURL = targetFileRef.getDownloadURL().then(function (url) {
        console.log(url);
        $('#uploadedImage').attr('src', url);
    });
});

function addQuestionAfter(target, questionIndex, inText) {
    $(target).after((questionHTML.replace(/!INSERTVALHERE!/g, questionIndex)).replace("!QTEXT!", inText));
}

function sendAnswersToDatabase() {
    var sendToRef = db.collection("answers").doc(targetUID).collection("COVID-19 Checklist")
        .doc($('#phoneNumber')[0].value);
    var answerArray = [];
    $('.questionWrapper').each(function (index, element) {
        answerArray.push($('#yes' + element.id)[0].checked)
        console.log(answerArray);
    });
    sendToRef.set({
        firstName: $('#firstName')[0].value,
        lastName: $('#lastName')[0].value,
        email: $('#email')[0].value,
        answerArray: answerArray
    });
}