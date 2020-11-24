// JavaScript source code
function sendToQuestionnaire(questionnaire, question, textToSet) {
<<<<<<< HEAD
    db.collection("creators").doc("test").collection("questionnaires").doc(questionnaire).
=======
    db.collection("creators").doc(auth.currentUser.uid).collection("questionnaires").doc(questionnaire).
>>>>>>> orbital-work
        collection("questions").doc(question).set({
            questionText: textToSet
        })
}