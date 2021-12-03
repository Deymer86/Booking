// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyDgLTmVBDO84XiA7pjusUqn1BZGAJMFqbk",
    authDomain: "elbooking-4b4c4.firebaseapp.com",
    projectId: "elbooking-4b4c4",
    storageBucket: "elbooking-4b4c4.appspot.com",
    messagingSenderId: "673048362242",
    appId: "1:673048362242:web:ac3cd326954d127bbc561b",
    measurementId: "G-D3K76S90QL"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/home',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],

    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            const user ={
                uid: authResult.user.uid,
                name: authResult.user.displayName,
                email: authResult.user.email,
                photoUrl: authResult.user.photoURL,
                flagNewUser: authResult.additionalUserInfo.isNewUser
            }

            localStorage.setItem('user', JSON.stringify(user));
            return true;
        },
      },
};

function ButtonLogin() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
}

export default ButtonLogin
