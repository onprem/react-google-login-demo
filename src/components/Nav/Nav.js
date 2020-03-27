import React from "react";
import { GoogleLogout } from "react-google-login";
import config from "../../config";
import logo from "../../assets/logo.png";
import styles from "./Nav.module.css";

const Nav = ({ profile, setProfile }) => {
  const { googleClientId } = config;

  const handleLogout = () => {
    setProfile(null);
  };

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Paper logo" className={styles.logo} />
      <span className={styles.accSpan}>
        {profile && (
          <>
            <span className={styles.proSpan}>
              <img src={profile.imageUrl} alt="avatar" className={styles.avatar} />
              <p className={styles.name}>{profile.givenName}</p>
            </span>
            <span className={styles.dropdown}>
              <GoogleLogout clientId={googleClientId} onLogoutSuccess={handleLogout} theme="dark" buttonText="LOGOUT" />
            </span>
          </>
        )}
      </span>
    </nav>
  );
};

export default Nav;
