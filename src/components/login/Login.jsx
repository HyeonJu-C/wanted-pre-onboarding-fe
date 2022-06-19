import React, { useState } from 'react';
import styles from './Login.module.css';
import LoginForm from './loginForm/LoginForm';

const Login = (props) => {
  // const [logInState, setLogInState] = useState(false);
  const onLoginHandler = (id, pw) => {
    props.onLogin(id, pw);
    // localStorage.setItem('isLoggedIn', '1');
    // setLogInState(true);
  };

  return (
    <aside className={styles.login}>
      <h1 className={`${styles['login-title']} sr-only`}>Logiin</h1>
      <LoginForm onLogin={onLoginHandler} />
      <a href="#" className={styles['login-fb']}>
        Facebook으로 로그인
      </a>
      <a href="#" className={styles['forget-pw']}>
        비밀번호를 잊으셨나요?
      </a>
    </aside>
  );
};

export default Login;
