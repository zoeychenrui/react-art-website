
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWXHEGddzkpG0iJVaAguwbhoqdek5rMOw",
    authDomain: "react-art-website-88dba.firebaseapp.com",
    projectId: "react-art-website-88dba",
    storageBucket: "react-art-website-88dba.appspot.com",
    messagingSenderId: "956014689500",
    appId: "1:956014689500:web:9a9d0b28cc417c89620819",
    measurementId: "G-NK83WFNNY8"
  };

  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
    
  export default storage;
 

