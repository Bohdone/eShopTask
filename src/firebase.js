import firebase from "firebase/compat";
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyDuJYoWzsDwBdwrva5AGDM6H5qWvfABKsE",
    authDomain: "eshop-e5ff5.firebaseapp.com",
    databaseURL: "https://eshop-e5ff5-default-rtdb.firebaseio.com",
    projectId: "eshop-e5ff5",
    storageBucket: "eshop-e5ff5.appspot.com",
    messagingSenderId: "228249074704",
    appId: "1:228249074704:web:1d7036e8b40e5906dade95"
}

firebase.initializeApp(config)


export const auth = firebase.auth()

export default firebase