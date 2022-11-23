// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzGUzuLdyeLmuCEdpO7LZII8AwIc_-5II",
  authDomain: "netflix-clone-ee80e.firebaseapp.com",
  projectId: "netflix-clone-ee80e",
  storageBucket: "netflix-clone-ee80e.appspot.com",
  messagingSenderId: "278720597965",
  appId: "1:278720597965:web:6c938ec0249a488c01fe84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore()
const auth = getAuth();

export {auth}
// export default db;