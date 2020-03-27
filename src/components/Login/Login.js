import React from "react";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import config from "../../config";

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
    <GoogleLogin
      clientId={googleClientId}
      theme="dark"
      onSuccess={handleGoogleLogin}
      onFailure={handleFailure}
      isSignedIn={true}
    />
  );
};

export default Login;
