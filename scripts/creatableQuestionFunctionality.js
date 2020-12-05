// JavaScript source code

var questionHTML =
    '<div class="questionWrapper" id="!INSERTVALHERE!">' +
    '<textarea class="questionTextInput" type="text" placeholder="Question Text Here"/>' +
    '<input type="radio" id="yes!INSERTVALHERE!" name="r!INSERTVALHERE!" value="Yes"/>' +
    '<label for="yes!INSERTVALHERE!">Yes</label>' +
    '<input type="radio" id="no!INSERTVALHERE!" name="r!INSERTVALHERE!" value="No"/>' +
    '<label for="no!INSERTVALHERE!">No</label>' +
    '</div>';

var nextQuestionIndex = 0;

function addQuestionBefore(target) {
    $(target).before(questionHTML.replace(/!INSERTVALHERE!/g, nextQuestionIndex));
    nextQuestionIndex = ++nextQuestionIndex;
}

function sendAllToDatabase() {
    var inTitle = $('#title').html().replace("<br>", "");
    var inSummary = $('#description').html().replace("<br>", "");
    db.collection("creators").doc(auth.currentUser.uid).collection("questionnaires").doc("COVID-19 Checklist")
        .set({
            summary: inSummary,
            title: inTitle
        });
    $('.questionWrapper').each(getTextFromQuestion);
}

function getTextFromQuestion(index, element) {
    $(this).css("background-color: red");
//    var inTitle = $('#title').html().replace("<br>", "");
    var textFromArea = $(this).children("textarea").val();
    sendToQuestionnaire("COVID-19 Checklist", index.toString(), textFromArea);
}