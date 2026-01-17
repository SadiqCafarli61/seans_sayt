import { doc, setDoc } from 'firebase/firestore';
import { db, } from './firebase-config';

const saveUserToFirestore = async (user: any) => {
   try {
     const userRef = doc(db, 'users', user.uid);
     await setDoc(userRef, {
       name: user.displayName,
       email: user.email,
       photoURL: user.photoURL,
       phoneNumber: user.phoneNumber || "",
       title: "",
     });
   } catch (error) {
     console.error("Error adding document: ", error);
   }
};
console.log(saveUserToFirestore)
