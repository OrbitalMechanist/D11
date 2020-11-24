// JavaScript source code

var questionHTML = //not very "hyper"text right now, is it?
    '<div class="questionWrapper" id="!INSERTVALHERE!">' +
    '<textarea class="questionTextInput" type="text" placeholder="Question Text Here"/>' +
    '<input type="radio" id="yes" name="!INSERTVALHERE!" value="Yes"/>' +
    '<label for="yes">Yes</label>' +
    '<input type="radio" id="no" name="!INSERTVALHERE!" value="No"/>' +
    '<label for="no">No</label>' +
    '</div>';

var nextQuestionIndex = 0;

function addQuestionBefore(target) {
    $(target).before(questionHTML.replace("!INSERTVALHERE!", nextQuestionIndex));
    nextQuestionIndex = ++nextQuestionIndex;
}

function sendAllToDatabase() {
    $('.questionWrapper').each(getTextFromQuestion);
}

function getTextFromQuestion(index, element) {
    $(this).css("background-color: red");
    var textFromArea = $(this).children("textarea").val();
    sendToQuestionnaire('test', index.toString(), textFromArea);
}