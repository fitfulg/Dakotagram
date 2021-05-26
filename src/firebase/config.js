import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0rHnPjBWg9ceSghexkV4qGDjEg2Gs_XA",
    authDomain: "dakotagram.firebaseapp.com",
    projectId: "dakotagram",
    storageBucket: "dakotagram.appspot.com",
    messagingSenderId: "775972987237",
    appId: "1:775972987237:web:b71c6b2246b53c5943c18c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore};