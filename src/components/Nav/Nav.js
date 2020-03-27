import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Nav.module.css';

const Nav = ({ profile }) => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Paper logo" className={styles.logo} />
      <span className={styles.accSpan}>
        {profile && <p>{profile.givenName}</p>}
      </span>
    </nav>
  );
};

export default Nav;
