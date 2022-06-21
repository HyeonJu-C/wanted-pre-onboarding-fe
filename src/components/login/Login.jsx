import React from 'react';
import FacebookIcon from '../icons/FacebookIcon';
import styles from './Login.module.css';
import LoginForm from './loginForm/LoginForm';

const Login = (props) => {
  return (
    <section className={styles.login}>
      <h1 className={`${styles['login-title']} sr-only`}>Logiin</h1>
      <LoginForm />
      <a href="#" className={styles['login-fb']}>
        <span>
          <FacebookIcon size="32" color="#3c507a" />
        </span>
        <span>Facebook으로 로그인</span>
      </a>
      <a href="#" className={styles['forget-pw']}>
        비밀번호를 잊으셨나요?
      </a>
    </section>
  );
};

export default Login;
