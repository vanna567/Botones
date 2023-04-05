import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtFyJo-xcUW0RjfF5wnTQ7p6HrfyHfu2Q",
  authDomain: "cronometro-18d80.firebaseapp.com",
  databaseURL: "https://cronometro-18d80-default-rtdb.firebaseio.com",
  projectId: "cronometro-18d80",
  storageBucket: "cronometro-18d80.appspot.com",
  messagingSenderId: "12977784072",
  appId: "1:12977784072:web:ed4516a933e0210a85d8bd"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
