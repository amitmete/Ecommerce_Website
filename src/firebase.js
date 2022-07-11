import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCmZS1F5jafNU70zBozeulqNlG9gCMp0c4",
  authDomain: "ecommerce-website-515dd.firebaseapp.com",
  projectId: "ecommerce-website-515dd",
  storageBucket: "ecommerce-website-515dd.appspot.com",
  messagingSenderId: "23973914411",
  appId: "1:23973914411:web:46e42cdc1e2da6bc38c76e",
  measurementId: "G-S6EPBG75DF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
