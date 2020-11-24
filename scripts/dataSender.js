// JavaScript source code
function sendToQuestionnaire(questionnaire, question, textToSet) {
    db.collection("creators").doc(auth.currentUser.uid).collection("questionnaires").doc(questionnaire).
        collection("questions").doc(question).set({
            questionText: textToSet
        })
}