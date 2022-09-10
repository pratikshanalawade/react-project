// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAvRcY97YnXYDJeVHvxSI0sUpYXNKLd2u4",
  authDomain: "login-task-cd8d4.firebaseapp.com",
  projectId: "login-task-cd8d4",
  storageBucket: "login-task-cd8d4.appspot.com",
  messagingSenderId: "49654147523",
  appId: "1:49654147523:web:c803b9c88333625523f576"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth}