// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqvAmVFoqixieaW2HsGEOtxqsvKptvG1E",
  authDomain: "tienda-react-48216.firebaseapp.com",
  projectId: "tienda-react-48216",
  storageBucket: "tienda-react-48216.appspot.com",
  messagingSenderId: "272942191132",
  appId: "1:272942191132:web:5f906d93095464cc9145d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);