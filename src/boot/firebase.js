// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ9SaG5RCwXYKvEtDZwsN8qr0343hFLGg",
  authDomain: "copq-calculator.firebaseapp.com",
  projectId: "copq-calculator",
  storageBucket: "copq-calculator.appspot.com",
  messagingSenderId: "603543406443",
  appId: "1:603543406443:web:5a23582974edbe86ab6e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

export {
  app,
  auth,
  createUserWithEmailAndPassword,
}
