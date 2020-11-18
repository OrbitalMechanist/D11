//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
    
  
    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyDQCBFYlNlgTUbmu_JELqGOH1UOLp6mYRE",
    authDomain: "pre-arrival-checklist.firebaseapp.com",
    databaseURL: "https://pre-arrival-checklist.firebaseio.com",
    projectId: "pre-arrival-checklist",
    storageBucket: "pre-arrival-checklist.appspot.com",
    messagingSenderId: "900013035307",
    appId: "1:900013035307:web:e6f078b97001e8b154ff6e"

  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();