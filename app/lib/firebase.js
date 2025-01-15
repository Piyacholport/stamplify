// lib/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// ค่าคอนฟิกจาก Firebase console
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyAqo-P3fwgyo9ppi_URlp9Co94cNkeoYeU",
    authDomain: "stamplify-2025.firebaseapp.com",
    projectId: "stamplify-2025",
    storageBucket: "stamplify-2025.firebasestorage.app",
    messagingSenderId: "20950482099",
    appId: "1:20950482099:web:de2d31e9ba47648474c4c6",
    measurementId: "G-XWJVF1HSPE"
  };

// ตรวจสอบว่ามีการ Initialize หรือยัง
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)

