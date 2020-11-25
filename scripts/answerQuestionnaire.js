// JavaScript source code

var questionHTML = //not very "hyper"text right now, is it?
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


$(document).ready(function () {
    var storageRef = storage.ref();
    var targetFileRef = storageRef.child("in.png");
    //    var targetFileRef = storageRef.child(auth.currentUser.uid + $('#title').html());
    
    targetDocRef.collection("questions").where("questionText", "!=", "").get().then(function (gotten) {
        var index = 0;
        gotten.forEach(function (doc) {
            // for each document in collection, create a new question and give it
            console.log(doc.id, " => ", doc.data());
            addQuestionBefore($('#submitButton'), index, doc.data().questionText);
            index = ++index;
        });
    });
    targetDocRef.get().then(function (gotten) {
        $('#description').html(gotten.data().summary);
    });
    var dlURL = targetFileRef.getDownloadURL().then(function (url) {
        console.log(url);
        $('#uploadedImage').attr('src', url);
    });
});

function addQuestionBefore(target, index, inText) {
    $(target).before((questionHTML.replace(/!INSERTVALHERE!/g, index)).replace("!QTEXT!", inText));
}

function getTextFromQuestion(index, element) {
    addQuestionBefore($('#submitButton', index, element.data()));
}