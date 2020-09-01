import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCc4ytquHXdk7nEjmjgdXNA0bp1fI6SQDg',
  authDomain: 'crwn-db-24afd.firebaseapp.com',
  databaseURL: 'https://crwn-db-24afd.firebaseio.com',
  projectId: 'crwn-db-24afd',
  storageBucket: 'crwn-db-24afd.appspot.com',
  messagingSenderId: '413949074201',
  appId: '1:413949074201:web:09205305f914666b900388',
  measurementId: 'G-J5YQF2108S',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
