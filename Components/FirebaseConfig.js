import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore'


const firebaseConfig = {
  apikey: process.env.EXPO_PUBLIC_API_KEY_FIREBASE,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID ,
  appId: process.env.EXPO_PUBLIC_APP_ID
};

initializeApp(firebaseConfig)


const firestore = getFirestore()

const NOTE = 'notes'

export {

    firestore,
    collection,
    addDoc,
    deleteDoc,
    serverTimestamp,
    NOTE,
    doc
}