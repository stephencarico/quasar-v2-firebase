// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "stores/user";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const store = useUserStore();

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

// Initialize Authentication
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    store.signIn(user);
  } else {
    // User is signed out
    // ...
    $q.notify({
      message: 'Error: Unable to sign in.',
      color: "negative",
    });
  }
});

export { app };
