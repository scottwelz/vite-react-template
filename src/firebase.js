// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTBt303TmxCzMOxW1DqV0Yq6xnA_7I59Y",
    authDomain: "vite-template-6963f.firebaseapp.com",
    projectId: "vite-template-6963f",
    storageBucket: "vite-template-6963f.firebasestorage.app",
    messagingSenderId: "906562362451",
    appId: "1:906562362451:web:0dd6e4c341a13b5609baa6",
    measurementId: "G-N8G3ZBYHDS"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
