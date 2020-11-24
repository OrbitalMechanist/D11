// JavaScript source code

var storageRef = storage.ref();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(auth.currentUser);
    } else {
        console.log("WARNING: NO USER!");
    }
});

var targetFileRef = storageRef.child('in.png');
//var targetFileRef = storageRef.child(auth.currentUser.uid + $('#title').html()); 


function sendImage() {
    console.log("attempting upload");
    console.log($('#imgInp'));

    if ($('#imgInp')[0].files[0]) {
        var file = $('#imgInp')[0].files[0];
        targetFileRef.put(file).then(function (snapshot) {
            console.log('Uploaded.');
        });
    } else {
        console.log("No new image to upload.");
    }

}