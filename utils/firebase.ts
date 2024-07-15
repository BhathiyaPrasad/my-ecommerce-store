import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLa_nr_0c0kudQSzcGV5hkwq3WH2bRGgo",
  authDomain: "freidea-pos.firebaseapp.com",
  projectId: "freidea-pos",
  storageBucket: "freidea-pos.appspot.com",
  messagingSenderId: "317401437770",
  appId: "1:317401437770:web:2657a877ea9fe88cf878b3",
  measurementId: "G-M8RF0RL2FP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
