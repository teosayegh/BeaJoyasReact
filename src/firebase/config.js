import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDqMmE3hSBE7IaHqt2TVQQ8CH2yuTMPbPc",
authDomain: "ecommerce-bea-joyas.firebaseapp.com",
projectId: "ecommerce-bea-joyas",
storageBucket: "ecommerce-bea-joyas.appspot.com",
messagingSenderId: "499750985936",
appId: "1:499750985936:web:db282d2d1e01c2ae00bed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}