// JavaScript source code
function sendToQuestionnaire(questionnaire, question, textToSet) {
    db.collection("creators").doc("test").collection("questionnaires").doc(questionnaire).
        collection("questions").doc(question).set({
            questionText: textToSet
        })
}