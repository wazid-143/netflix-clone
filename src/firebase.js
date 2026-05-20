import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsLQl_gvprVNirQFbJdAfyuUF0SfiEw4Y",
  authDomain: "netflix-clone-9ce12.firebaseapp.com",
  projectId: "netflix-clone-9ce12",
  storageBucket: "netflix-clone-9ce12.firebasestorage.app",
  messagingSenderId: "276305222838",
  appId: "1:276305222838:web:2d7fca4e15da2cb3ca1a17"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);