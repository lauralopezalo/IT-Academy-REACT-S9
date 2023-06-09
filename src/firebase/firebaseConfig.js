// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBYHxnb4rqC8Cy3K57FmFORysI6-87tlaI",
    authDomain: "coworking-project-e69c0.firebaseapp.com",
    projectId: "coworking-project-e69c0",
    storageBucket: "coworking-project-e69c0.appspot.com",
    messagingSenderId: "643429243958",
    appId: "1:643429243958:web:2f2a4bf60a0792447a8c97",
    measurementId: "G-KFWDG01VEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
