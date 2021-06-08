// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCJD3HfGtB-a4rE8oCM_jMhxPBqj5VN_QI",
      authDomain: "kwitter-1e45d.firebaseapp.com",
      projectId: "kwitter-1e45d",
      storageBucket: "kwitter-1e45d.appspot.com",
      messagingSenderId: "134139783190",
      appId: "1:134139783190:web:0a15e8785dd710b2c16d37",
      measurementId: "G-VPVNQFQZCC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();