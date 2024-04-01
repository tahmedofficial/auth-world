import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeTQcP20a_gYZVo1lXvPxPCbiJ1NIMIBo",
    authDomain: "auth-world.firebaseapp.com",
    projectId: "auth-world",
    storageBucket: "auth-world.appspot.com",
    messagingSenderId: "901142694566",
    appId: "1:901142694566:web:dfd8091377e215c7d38267"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;