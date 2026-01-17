import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBQiX9Y9gdQO8YhYKGy_bEZm9VjLomh_4Q",
  authDomain: "seans-site-5fe35.firebaseapp.com",
  projectId: "seans-site-5fe35",
  storageBucket: "seans-site-5fe35.firebasestorage.app",
  messagingSenderId: "566901977954",
  appId: "1:566901977954:web:5ab410a0050a211722323b",
  measurementId: "G-5W2CW9R2XL"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
