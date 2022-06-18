import styles from './Footer.module.css';
import React from 'react';

const Footer = () => {
  return (
    <section className={`${styles.footer}`}>
      <h1 className={styles['footer-title']}>앱을 다운로드 하세요.</h1>
      <div className={styles['footer-download']}>
        <a className={styles['download-item']} href="#">
          App Store에서 <br />
          다운로드 하기
        </a>
        <a className={styles['download-item']} href="#">
          다운로드 하기 <br />
          Google Play
        </a>
      </div>
    </section>
  );
};

export default Footer;
