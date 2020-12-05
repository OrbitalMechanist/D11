$(document).ready(function () {

class Questionnaire {
    constructor(title, qty) {
        this.title = title;
        this.qty = qty;
    }
}
});


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let targetUID = auth.currentUser.uid;


        var targetDocRef = db.collection("creators").doc(targetUID).collection("questionnaires").doc("COVID-19 Checklist");
        var targetDocRef2 = db.collection("creators").doc(targetUID).collection("questionnaires");

        targetDocRef.get().then(function (gotten) {
            $('#title').html(gotten.data().title);
            $('#description').html(gotten.data().summary);
        });
        targetDocRef2.get().then(function (querySnapshot) {

            if (!querySnapshot.empty) {
                var currentContainer;
                var contentMain = $('#homeContent');
                $('<h1/>').appendTo(contentMain).html("Your Questionnaire:");
                currentContainer = $('<div/>').appendTo("#homeContent");
                targetDocRef.get().then(function (gotten) {
                    $('<h1/>').appendTo(currentContainer).html(gotten.data().title);
                });
                contentMain.click(function () {
                    window.location.href = 'responces.html';
                });

            } else {
                $('<h1/>').appendTo('#homeContent').html("You haven't set up a questionnaire");
                $('<a/>').appendTo('#homeContent').attr("href", "createQuestionnaire.html").html("Create One");
            }
        });

    } else {
        console.log("WARNING: NO USER!");
    }
});
