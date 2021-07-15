import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-OAaopsGS97EYaL9CTUyrS-RIzY-e71g",
  authDomain: "cart-fe070.firebaseapp.com",
  projectId: "cart-fe070",
  storageBucket: "cart-fe070.appspot.com",
  messagingSenderId: "830163513351",
  appId: "1:830163513351:web:81eb42692036d81b783aa2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 
// serviceWorker.unregister();
// npm install react-service-worker