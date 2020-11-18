// JavaScript source code

var storageRef = storage.ref();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(auth.currentUser);
    } else {
        console.log("WARNING: NO USER!");
    }
});

var targetFileRef = storageRef.child("in.png"); 


function sendImage() {
    console.log("attempting upload");
    console.log($('#imgInp'));

    var file = $('#imgInp')[0].files[0];
    targetFileRef.put(file).then(function (snapshot) {
        console.log('Uploaded.');
    });

}