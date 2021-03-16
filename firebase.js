// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import * as firebase from "firebase"
import { firebase } from '@firebase/app'
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCosvrfMY1Gap-uIB0b3rmLcX3TGp2ONVo",
    authDomain: "signal-clone-a8df5.firebaseapp.com",
    projectId: "signal-clone-a8df5",
    storageBucket: "signal-clone-a8df5.appspot.com",
    messagingSenderId: "956884956984",
    appId: "1:956884956984:web:3cbcbcc011be7c330f33cd",
    measurementId: "G-39SNBYW6CP"
  };

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
}else{
  app = firebase.app();
}


const db = app.firestore()
const auth = firebase.auth()

export {db, auth};