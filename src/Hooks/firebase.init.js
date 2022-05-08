import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuilglptTCMv1Bkqhvjefizy4c5CMfERU",
  authDomain: "warehouse-management-a330b.firebaseapp.com",
  projectId: "warehouse-management-a330b",
  storageBucket: "warehouse-management-a330b.appspot.com",
  messagingSenderId: "188320602760",
  appId: "1:188320602760:web:4a1c450e79357fba339d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

