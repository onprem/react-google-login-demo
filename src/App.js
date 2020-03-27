import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import config from "./config";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [profile, setProfile] = useState();
  const { googleClientId } = config;

  const handleGoogleLogin = googleUser => {
    setProfile(googleUser.profileObj);
  };

  const handleFailure = res => {
    console.log(res);
  };

  const handleLogout = () => {
    setProfile(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {profile ? (
          <>
            <p>
              <code>Welcome to Hell, {profile.givenName}</code>.
            </p>
            <GoogleLogout clientId={googleClientId} onLogoutSuccess={handleLogout} theme="dark" />
          </>
        ) : (
          <GoogleLogin
            clientId={googleClientId}
            theme="dark"
            onSuccess={handleGoogleLogin}
            onFailure={handleFailure}
            isSignedIn={true}
          />
        )}
      </header>
    </div>
  );
}

export default App;
