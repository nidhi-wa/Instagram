// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-app-7ba3b.firebaseapp.com",
  projectId: "insta-app-7ba3b",
  storageBucket: "insta-app-7ba3b.appspot.com",
  messagingSenderId: "601970087253",
  appId: "1:601970087253:web:18af10d034e3592c5b8bdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// firebse rule
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write:  if true;
//   }
//  }
// }