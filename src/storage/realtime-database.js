import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCGYAgFy1G1GdBq31mk1Tt-Hjormiyi6b4',
  authDomain: 'innovillage-jinggo.firebaseapp.com',
  databaseURL:
    'https://innovillage-jinggo-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'innovillage-jinggo',
  storageBucket: 'innovillage-jinggo.appspot.com',
  messagingSenderId: '422467213305',
  appId: '1:422467213305:web:d51248f6b25f4154fb4f28',
};

const app = firebase.initializeApp(firebaseConfig);

// firebase
//   .database()
//   .ref('/realtime')
//   .on('value', snapshot => {
//     console.log(snapshot);
//   });

export const db = firebase.database();
export default app;
