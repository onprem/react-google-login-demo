import React from "react";
import { Redirect } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import config from "../../config";

const Login = ({ profile, setProfile }) => {
  if (!profile) return <Redirect to="/login" />;

  const { googleClientId } = config;

  const handleLogout = () => {
    setProfile(null);
  };

  return (
    <>
      <p>
        <code>Welcome to Hell, {profile.givenName}</code>.
      </p>
      <GoogleLogout clientId={googleClientId} onLogoutSuccess={handleLogout} theme="dark" />
    </>
  );
};

export default Login;
