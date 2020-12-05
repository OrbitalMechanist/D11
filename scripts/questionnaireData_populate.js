var allContents;
var questions;
var targetUID;

const injectable =
    '<div class="responseWrapper">' +
    '<button class="btn btn-primary wideButton" type = "button" data-toggle="collapse" data-target="#collapsar"' +
    'aria -expanded= "false" aria-controls="collapsar"> ' +
        '!NAME!' +
    '</button>' +
    '<div class="collapse" id="collapsar">' +
        '<div class="card card-body">' +
            '<p class="responseTakerInfo">!PHONE!</p>' +
            '<p class="responseTakerInfo">!EMAIL!</p>' +
        '</div>' +
    '</div>' +
    '</div>';

const answerInjectable = '<div class="responseQuestion">' +
    '<p class="responseQuestionDisplay">' +
    '!QUESTIONTEXT!' +
    '</p>' +
    '<span class="Answer">!ANS!</span>' +
    '<div/>';

$(document).ready(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(auth.currentUser);
            targetUID = auth.currentUser.uid;
            db.collection("creators").doc(targetUID).collection("questionnaires").doc("COVID-19 Checklist")
                .collection("questions").get().then(function (querySnapshot) {
                    questions = querySnapshot;
                });
            db.collection("answers").doc(targetUID).collection("COVID-19 Checklist").get().then(function (querySnapshot) {
                allContents = querySnapshot;
                let i = 0;
                querySnapshot.forEach(function (doc) {
                    let currentItem = addItemAfter($('#additionTarget'), i, doc);
                    let ind = 0;
                    questions.forEach(function (question) {
                        let currentQuestion = $(answerInjectable).appendTo($(currentItem).find('.card-body'));
                        currentQuestion.html(currentQuestion.html().replace(/!QUESTIONTEXT!/g, question.data().questionText));
                        console.log(doc.data().answerArray[ind]);
                        if (doc.data().answerArray[ind]) {
                            console.log("if Yes");
                            currentQuestion.html(currentQuestion.html().replace(/!ANS!/, "Yes"));
                        } else {
                            console.log("if No");
                            currentQuestion.html(currentQuestion.html().replace(/!ANS!/, "No"));
                        }
                        console.log(currentQuestion.html());
                        console.log(ind);
                        ind = ind + 1;
                    });
                    i = i + 1;
                });
            });

        } else {
            console.log("WARNING: NO USER!");
        }
    });
});

function addItemAfter(target, questionIndex, doc) {

    return $(((injectable.replace(/collapsar/g, ("collapsar" + questionIndex))).replace("!NAME!", doc.data().firstName
        + " " + doc.data().lastName).replace("!PHONE!", doc.id).replace("!EMAIL!", doc.data().email))).insertAfter($(target));
}