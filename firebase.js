// Firebase SDK 初期化
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpeSLN-dGVAaFv4DGP4pzhP6kLxSEPP-w",
  authDomain: "e-sports-4fb47.firebaseapp.com",
  databaseURL: "https://e-sports-4fb47-default-rtdb.firebaseio.com",
  projectId: "e-sports-4fb47",
  storageBucket: "e-sports-4fb47.firebasestorage.app",
  messagingSenderId: "91039718328",
  appId: "1:91039718328:web:82c10c9be700bbb7a08d4d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
