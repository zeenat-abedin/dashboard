import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbonLlR8AqZbuSOGuiuxVWi0K1ii_hUQs",
  authDomain: "dashboard-dd7d8.firebaseapp.com",
  projectId: "dashboard-dd7d8",
  storageBucket: "dashboard-dd7d8.appspot.com",
  messagingSenderId: "889829882971",
  appId: "1:889829882971:web:9631443e25e108e9cdd37e",
  measurementId: "G-DH3EEKEC2Q"
};

let app = initializeApp(firebaseConfig);

if (!app) {
  app = initializeApp(firebaseConfig);
} else {
  console.warn("Firebase app has already been initialized.");
}

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();