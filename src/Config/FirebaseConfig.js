
import firebase from 'firebase/compat/app'
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDz5z6C8C28513e0nLvW-mpd70dnfCPIUA",
  authDomain: "blood-hub-9c5a5.firebaseapp.com",
  projectId: "blood-hub-9c5a5",
  storageBucket: "blood-hub-9c5a5.appspot.com",
  messagingSenderId: "994473815905",
  appId: "1:994473815905:web:cecfe32ca25183a1629f20",
  measurementId: "G-8J9E83QRC3"
};


export default  firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase.initializeApp(firebaseConfig));




