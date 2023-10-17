// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhbhKSz1__TyjFUNfNeq_fI2eTUdZHdhc",
  authDomain: "uvbusschedule.firebaseapp.com",
  databaseURL: "https://uvbusschedule-default-rtdb.firebaseio.com",
  projectId: "uvbusschedule",
  storageBucket: "uvbusschedule.appspot.com",
  messagingSenderId: "814383885380",
  appId: "1:814383885380:web:523d152bd4860437e1a011",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const starCountRef = ref(db, "BusRoutes/");
const test = document.getElementById("times");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  data.forEach(
    (element) => (test.innerHTML += ", " + convertTime(element.est_departure))
  );
});

function convertTime(time) {
  // Converts from 24-hour clock to 12-hour clock
  var partsArray = time.split(":");
  var hour = parseInt(partsArray[0]);
  var minute = partsArray[1];
  if (time.length > 5) {
    return "ERROR";
  }
  if (hour > 12) {
    hour -= 12;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    var newTime = `${hour}:${minute} pm`;
    return newTime;
  }
  return time + " am";
}
