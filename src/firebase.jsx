import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCFJFqcbDHZouSMWrUlTbJYp1URDJvgcSY",
   authDomain: "ecooptions-df5c7.firebaseapp.com",
   projectId: "ecooptions-df5c7",
   storageBucket: "ecooptions-df5c7.appspot.com",
   messagingSenderId: "595629541301",
   appId: "1:595629541301:web:8518e29365866d19f7bbfc",
   measurementId: "G-65EQDNKMBB"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app);


export default db