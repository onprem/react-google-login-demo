import React from "react";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import config from "../../config";
import styles from "./Login.module.css";

const Login = ({ profile, setProfile }) => {
  if (profile) return <Redirect to="/dashboard" />;

  const { googleClientId } = config;

  const handleGoogleLogin = googleUser => {
    setProfile(googleUser.profileObj);
  };

  const handleFailure = res => {
    console.log(res);
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.left}>
        <h1 className={styles.motto}>Manage your business seamlessly with Paper.</h1>
      </div>
      <div className={styles.right}>
      <div className={styles.loginDiv}>
        <span className={styles.greeting}>Hola, Amigos!</span>
        <span className={styles.sub}>Login with your Google account to access all your orders.</span>
        <GoogleLogin
          clientId={googleClientId}
          theme="dark"
          onSuccess={handleGoogleLogin}
          onFailure={handleFailure}
          isSignedIn={true}
        />
      </div>
      </div>
    </section>
  );
};

export default Login;
