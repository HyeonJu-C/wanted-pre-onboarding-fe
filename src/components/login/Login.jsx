import React from 'react';
import styles from './Login.module.css';
import LoginForm from './loginForm/LoginForm';

const Login = (props) => {
  return (
    <section className={styles.login}>
      <h1 className={`${styles['login-title']} sr-only`}>Logiin</h1>
      <LoginForm />
      <a href="#" className={styles['login-fb']}>
        Facebook으로 로그인
      </a>
      <a href="#" className={styles['forget-pw']}>
        비밀번호를 잊으셨나요?
      </a>
    </section>
  );
};

export default Login;
