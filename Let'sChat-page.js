// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCljmW-Q16pRpfmDwy2TY-QENwKSi-BJs",
    authDomain: "let-schat-1d275.firebaseapp.com",
    databaseURL: "https://let-schat-1d275-default-rtdb.firebaseio.com",
    projectId: "let-schat-1d275",
    storageBucket: "let-schat-1d275.appspot.com",
    messagingSenderId: "1040444184895",
    appId: "1:1040444184895:web:11ab636d3ff662ddc2db8a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0

    });

    document.getElementById("msg").value = "";

  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
