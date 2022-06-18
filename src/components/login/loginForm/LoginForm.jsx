import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {
  const [isValid, setIsValid] = useState(null);
  const onSubmitHandler = () => {};

  return (
    <form className={styles['login-form']} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="id"
        id="id"
        className={styles['login-id']}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        className={styles['login-pw']}
        placeholder="비밀번호"
        required
      />
      <button type="submit" className={styles['login-submit']}>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
