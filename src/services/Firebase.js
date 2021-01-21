import firebase from "firebase/app";

const { NODE_ENV, REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_MEASUREMENT_ID } = process.env;

const prodConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_PROJECT_ID + '.firebaseapp.com',
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_PROJECT_ID + '.appspot.com',
    messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
}

const devConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_PROJECT_ID + '.firebaseapp.com',
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_PROJECT_ID + '.appspot.com',
    messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseConfig = NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export {firebase as default};