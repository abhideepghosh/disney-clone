// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyCmzKKeohhY-r0-smCHnjxwApjMwGswe6w",
//     authDomain: "disneyplus-clone-eeebc.firebaseapp.com",
//     projectId: "disneyplus-clone-eeebc",
//     storageBucket: "disneyplus-clone-eeebc.appspot.com",
//     messagingSenderId: "631691614371",
//     appId: "1:631691614371:web:8e0b7f885dacb551274716",
//     measurementId: "G-GWR4PGGCVD"
//   };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.fireStore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

// https://firebase.google.com/docs/web/setup

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCmzKKeohhY-r0-smCHnjxwApjMwGswe6w",
    authDomain: "disneyplus-clone-eeebc.firebaseapp.com",
    projectId: "disneyplus-clone-eeebc",
    storageBucket: "disneyplus-clone-eeebc.appspot.com",
    messagingSenderId: "631691614371",
    appId: "1:631691614371:web:8e0b7f885dacb551274716",
    measurementId: "G-GWR4PGGCVD"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
