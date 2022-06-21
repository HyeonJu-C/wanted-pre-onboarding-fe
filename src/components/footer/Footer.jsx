import styles from './Footer.module.css';
import React from 'react';
import AppleIcon from '../icons/AppleIcon';
import GoogleplayIcon from '../icons/GoogleplayIcon';

const Footer = () => {
  return (
    <section className={`${styles.footer}`}>
      <h1 className={styles['footer-title']}>앱을 다운로드 하세요.</h1>
      <div className={styles['footer-download']}>
        <a className={styles['download-item']} href="#">
          <span>
            {' '}
            <AppleIcon size="32" color="rgb(255, 255,255)" />{' '}
          </span>
          <span>
            App Store에서 <br />
            다운로드 하기
          </span>
        </a>
        <a className={styles['download-item']} href="#">
          <span>
            <GoogleplayIcon size="32" color="rgb(255, 255,255)" />
          </span>
          <span>
            다운로드 하기 <br />
            Google Play
          </span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
