// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBa3GE0kGV38FwAVUBRMzihVNsgcuZlsDM",
	authDomain: "firegram-2-d972f.firebaseapp.com",
	projectId: "firegram-2-d972f",
	storageBucket: "firegram-2-d972f.appspot.com",
	messagingSenderId: "767642390087",
	appId: "1:767642390087:web:f4a94ac4afc547e69eeb62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFiresStore = getFirestore(app);
const timestamp = serverTimestamp;

export { app, projectStorage, projectFiresStore, timestamp };
