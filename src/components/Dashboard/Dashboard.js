import React from "react";
import { Redirect } from "react-router-dom";


const Login = ({ profile, setProfile }) => {
  if (!profile) return <Redirect to="/login" />;

  return (
    <>
      <p>
        <code>Welcome to Hell, {profile.givenName}</code>.
      </p>
    </>
  );
};

export default Login;
