import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHgJMYfSP0QDPM2f5w_b9dU9ssjk-D7Zs",
    authDomain: "learn-courses-494dd.firebaseapp.com",
    databaseURL: "https://learn-courses-494dd.firebaseio.com",
    projectId: "learn-courses-494dd",
    storageBucket: "learn-courses-494dd.appspot.com",
    messagingSenderId: "122928633257",
    appId: "1:122928633257:web:18ee73160ac412c9ace0b8",
    measurementId: "G-0JQCJWWLRJ"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;