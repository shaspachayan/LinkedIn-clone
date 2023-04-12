import firebase from "firebase";

// apiKey: "AIzaSyA-gNcSS2E0Vb9P-ob-rVl-kz6jtg9A_0M",
// authDomain: "linkedin-clone-6fa9c.firebaseapp.com",
// projectId: "linkedin-clone-6fa9c",
// storageBucket: "linkedin-clone-6fa9c.appspot.com",
// messagingSenderId: "272062247828",
// appId: "1:272062247828:web:941299fcddeaaabbe91581"
// const firebaseConfig = {
//     apiKey: "AIzaSyDUNizo7BShkTCIL11gxQUG5RuXhssZV-4",
//     authDomain: "linkedin-dummy-402c7.firebaseapp.com",
//     projectId: "linkedin-dummy-402c7",
//     storageBucket: "linkedin-dummy-402c7.appspot.com",
//     messagingSenderId: "371900073636",
//     appId: "1:371900073636:web:cb8bbcb679cce156e54831"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDUNizo7BShkTCIL11gxQUG5RuXhssZV-4",
    authDomain: "linkedin-dummy-402c7.firebaseapp.com",
    projectId: "linkedin-dummy-402c7",
    storageBucket: "linkedin-dummy-402c7.appspot.com",
    messagingSenderId: "371900073636",
    appId: "1:371900073636:web:cb8bbcb679cce156e54831"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;


// ---------------------

// Import the functions you need from the SDKs you need
// import initializeApp from "firebase/app";
// import firebase from "firebase";

//  Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDUNizo7BShkTCIL11gxQUG5RuXhssZV-4",
//     authDomain: "linkedin-dummy-402c7.firebaseapp.com",
//     projectId: "linkedin-dummy-402c7",
//     storageBucket: "linkedin-dummy-402c7.appspot.com",
//     messagingSenderId: "371900073636",
//     appId: "1:371900073636:web:cb8bbcb679cce156e54831"
// };

// // Initialize Firebase
// const App = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;
