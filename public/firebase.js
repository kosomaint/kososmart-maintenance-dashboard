// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpZmnnNxAAsM6oUS_cA3uaLuliNjJFJiQ",
  authDomain: "smartmaintenance-c1e7a.firebaseapp.com",
  databaseURL: "https://smartmaintenance-c1e7a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartmaintenance-c1e7a",
  storageBucket: "smartmaintenance-c1e7a.firebasestorage.app",
  messagingSenderId: "256718543848",
  appId: "1:256718543848:web:9559c61dcf7a6a3764a25d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(error => {
      alert('Login failed: ' + error.message);
    });
}

function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Sign up successful! Please log in.');
    })
    .catch(error => {
      alert('Sign up failed: ' + error.message);
    });
}
