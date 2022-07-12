import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGd5tyNMi8KrIRGyegdQwS6hV6a6Xjo54",
  authDomain: "bookscrud-a06d1.firebaseapp.com",
  projectId: "bookscrud-a06d1",
  storageBucket: "bookscrud-a06d1.appspot.com",
  messagingSenderId: "122403393156",
  appId: "1:122403393156:web:c810b4a0b55a3b6f6f7cd1"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);