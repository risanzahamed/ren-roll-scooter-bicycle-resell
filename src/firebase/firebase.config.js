import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC1gjmMNegm_k6tBtap1aPPcVD0nDOq7pc",
  authDomain: "resell-kick-scooter.firebaseapp.com",
  projectId: "resell-kick-scooter",
  storageBucket: "resell-kick-scooter.appspot.com",
  messagingSenderId: "537022343077",
  appId: "1:537022343077:web:f49894b7d3043716ffaa4c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth