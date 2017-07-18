import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "react-mikro",
    storageBucket: "",
    messagingSenderId: ""
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const photoRef = firebase.database().ref('photos');
