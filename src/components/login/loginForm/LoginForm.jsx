import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../../../context/auth';
import useValidation from '../../../hooks/use-validation';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const context = useContext(AuthContext);
  const { checkValid } = useValidation();

  const idChangeHandler = (e) => {
    setIdValue(e.target.value);
  };
  const pwChangeHandler = (e) => {
    setPwValue(e.target.value);
  };

  const isIdValid = checkValid(
    idValue,
    new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
  );
  const isPwValid = checkValid(
    pwValue,
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  );

  const submitHandler = (e) => {
    e.preventDefault();
    isIdValid && isPwValid && context.onLogin(idValue);
  };

  const idClasses = `${styles['login-id']} ${
    isIdValid === false ? styles['invalid'] : ''
  }  ${isIdValid ? styles['valid'] : ''}`;

  const pwClasses = `${styles['login-pw']} ${
    isPwValid === false ? styles['invalid'] : ''
  }  ${isPwValid ? styles['valid'] : ''}`;

  const submitBtnClasses = `${styles['login-submit']} ${
    isIdValid && isPwValid ? styles['valid'] : styles['invalid']
  }`;

  return (
    <>
      <form className={styles['login-form']} onSubmit={submitHandler}>
        <input
          type="text"
          name="id"
          id="id"
          className={idClasses}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          required
          onChange={idChangeHandler}
          value={idValue}
        />
        <input
          type="password"
          name="password"
          id="password"
          className={pwClasses}
          placeholder="비밀번호"
          required
          onChange={pwChangeHandler}
          value={pwValue}
        />
        <button
          type="submit"
          className={submitBtnClasses}
          disabled={!isIdValid || !isPwValid}
        >
          로그인
        </button>
      </form>
      {context.isLoggedIn && (
        <Routes>
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
      )}
    </>
  );
};

export default LoginForm;
