import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBDOfzeI4TbP1oxMupoXjsmv8BohGwi7OQ",
    authDomain: "dsm-edu-gov.firebaseapp.com",
    projectId: "dsm-edu-gov",
    storageBucket: "dsm-edu-gov.firebasestorage.app",
    messagingSenderId: "707137808296",
    appId: "1:707137808296:web:5e31da742dc48544b99f9d"
};

export const app = initializeApp(firebaseConfig);