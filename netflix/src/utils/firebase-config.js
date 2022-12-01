
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBpY_FK8LA9e9I7Ar5z77syJACYCM468EM",
  authDomain: "react-netflix-trois.firebaseapp.com",
  projectId: "react-netflix-trois",
  storageBucket: "react-netflix-trois.appspot.com",
  messagingSenderId: "712935975623",
  appId: "1:712935975623:web:81dcd14d2b2a698d8a2ce2",
  measurementId: "G-RCMDQMQ6SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);