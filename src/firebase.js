import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyARP1XgTMZYEnplPyyw0gj4nd9i5KVhhsk",
    authDomain: "first-flight-with-friend-f5bcf.firebaseapp.com",
    databaseURL: "https://first-flight-with-friend-f5bcf.firebaseio.com",
    projectId: "first-flight-with-friend-f5bcf",
    storageBucket: "first-flight-with-friend-f5bcf.appspot.com",
    messagingSenderId: "184080465951"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();