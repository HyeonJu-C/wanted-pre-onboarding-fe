import React from 'react';
import styles from './Logo.module.css';
import instgramImage from '../../../assets/images/instagram.png';

const Logo = (props) => {
  const classes = props.className;
  return (
    <a className={`${styles.logo} ${classes}`} href="#">
      <img
        className={styles['logo-image']}
        src={instgramImage}
        alt="instagram logo"
      />
    </a>
  );
};
export default Logo;
