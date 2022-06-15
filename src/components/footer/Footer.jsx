import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <section className="footer container">
      <h1 className="footer-title">앱을 다운로드 하세요.</h1>
      <div className="footer-download">
        <a className="download-item" href="#">
          App Store에서 <br />
          다운로드 하기
        </a>
        <a className="download-item" href="#">
          다운로드 하기 <br />
          Google Play
        </a>
      </div>
    </section>
  );
};

export default Footer;
