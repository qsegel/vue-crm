import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDv-uzm1xcMSei3HZkN1SiWbcLq0TGFUhM",
  authDomain: "vue-crm-8a9bd.firebaseapp.com",
  projectId: "vue-crm-8a9bd",
  storageBucket: "vue-crm-8a9bd.appspot.com",
  messagingSenderId: "378633820619",
  appId: "1:378633820619:web:27d68d1a039979aef1fe4e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
