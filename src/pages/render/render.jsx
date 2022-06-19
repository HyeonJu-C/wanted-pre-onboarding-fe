import React from 'react';
import styles from './render.module.css';
import Logo from '../../components/header/logo/Logo';
import Login from '../../components/login/Login';
import Footer from '../../components/footer/Footer';
import Register from '../../components/register/Register';

const Render = (props) => {
  const onLoginHandler = (id, pw) => {
    props.onLogin(id, pw);
  };
  return (
    <section className={`${styles.render} container`}>
      <h1 className="sr-only">로그인, 계정 만들기, 앱 다운로드하기</h1>
      <div className={styles['render-login']}>
        <Logo className={styles['render-logo']} />
        <Login onLogin={onLoginHandler} />
      </div>
      <Register />
      <Footer />
    </section>
  );
};

export default Render;
