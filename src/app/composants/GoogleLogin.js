// GoogleLogin.js
import React from 'react';
import "./googleLogin.css"
import { auth, provider } from '../../../utils/configFirebase.js';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const GoogleLogin = () => {
  const [user] = useAuthState(auth);

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User info:', result.user);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };

  return (
    <div className="google-login-container">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button className="google-logout-button" onClick={logout}>Logout</button>
        </div>
      ) : (
        <button className="google-login-button" onClick={loginWithGoogle}>
          <div className="google-icon"></div>
          <span>Sign in with Google</span>
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;