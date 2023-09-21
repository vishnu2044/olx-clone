import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA_0rdXwKyyDFZnSflxX843p4fGwi-jguQ",
    authDomain: "olx-clone-ff60c.firebaseapp.com",
    projectId: "olx-clone-ff60c",
    storageBucket: "olx-clone-ff60c.appspot.com",
    messagingSenderId: "774390669580",
    appId: "1:774390669580:web:e7d02b13e5fc3b7856e929"
  };

export const app =  initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
