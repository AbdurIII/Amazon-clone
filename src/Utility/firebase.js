import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3GC7E64t14bi-vKGeVuxdcBoyfaSx28U",
  authDomain: "clone-24281.firebaseapp.com",
  projectId: "clone-24281",
  storageBucket: "clone-24281.firebasestorage.app",
  messagingSenderId: "726954887126",
  appId: "1:726954887126:web:baa75bd225886d37e08677",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
