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

  function addRoom() {

    var room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"

          
    })
    localStorage.setItem("room_name", room_name);

    window.location = "let'sChat-room.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; Room_names = childKey;
//Start code

console.log("Room_names")
row = "<div class='room_name' id="+Room_names + " onclick='rediretToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row; 
//End code
});});}
getData();

function rediretToRoomName(name) {

  console.log(name);
  localStorage.setItem("room_name", name);

  window.location = "let'sChat-page.html";

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}