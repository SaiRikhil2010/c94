
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDv58Lm2elRwOMXW-a7NBb_s7iaCq_XU30",
    authDomain: "kwittter-8a2fa.firebaseapp.com",
    databaseURL: "https://kwittter-8a2fa-default-rtdb.firebaseio.com",
    projectId: "kwittter-8a2fa",
    storageBucket: "kwittter-8a2fa.appspot.com",
    messagingSenderId: "223361029067",
    appId: "1:223361029067:web:2626c857a6b8e81b551c4e",
    measurementId: "G-WEXS06T2YE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser() {
      user_name=document.getElementById("user_name").value;

      firebase.database().ref("/").child(user_name).update({

        purpose:"adduser"
      })
    
      
  }