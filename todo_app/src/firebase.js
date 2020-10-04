
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkG8-1zhfo5fIv_LGPCLfKaAM7RFwfIJk",
        authDomain: "todo-app-cp-252a5.firebaseapp.com",
        databaseURL: "https://todo-app-cp-252a5.firebaseio.com",
        projectId: "todo-app-cp-252a5",
        storageBucket: "todo-app-cp-252a5.appspot.com",
        messagingSenderId: "624718987409",
        appId: "1:624718987409:web:3380883568942bbb01bf30",
        measurementId: "G-SF7HS7SK0C"
});

const db = firebaseApp.firestore();

export default db;