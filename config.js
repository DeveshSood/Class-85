import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBChBXqIB56gXJprJDfFOH565bcmHIuXKQ",
    authDomain: "story-telling-app-15c83.firebaseapp.com",
    projectId: "story-telling-app-15c83",
    storageBucket: "story-telling-app-15c83.appspot.com",
    messagingSenderId: "1043118449716",
    appId: "1:1043118449716:web:cafcc09b687e08d237d661"
  };
  if(!firebase.apps.length==0){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase.database();