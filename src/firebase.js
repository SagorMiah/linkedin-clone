import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdeP84wyL3_bSvU_ZU9uxstgl5Y67w6xA",
  authDomain: "linkedin-clone-e84c9.firebaseapp.com",
  projectId: "linkedin-clone-e84c9",
  storageBucket: "linkedin-clone-e84c9.appspot.com",
  messagingSenderId: "360283690511",
  appId: "1:360283690511:web:7225cfd193522870ddb57a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
