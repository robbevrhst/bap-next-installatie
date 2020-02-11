import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBkk203oycr_gLWqAyi0QLDIdLGqmShkeY',
  authDomain: 'bachelorproef-48be2.firebaseapp.com',
  databaseURL: 'https://bachelorproef-48be2.firebaseio.com',
  projectId: 'bachelorproef-48be2',
  storageBucket: 'bachelorproef-48be2.appspot.com',
  messagingSenderId: '799954259531',
  appId: '1:799954259531:web:0f0ae4c59b233934e187ce'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
