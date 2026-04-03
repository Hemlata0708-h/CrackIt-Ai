import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "crackit-ai-6d5f8.firebaseapp.com",
  projectId: "crackit-ai-6d5f8",
  storageBucket: "crackit-ai-6d5f8.firebasestorage.app",
  messagingSenderId: "155053790071",
  appId: "1:155053790071:web:539c932d5985e4b69b0772",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
