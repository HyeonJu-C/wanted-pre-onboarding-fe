import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth';
import styles from './LoginForm.module.css';

const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

const LoginForm = (props) => {
  const [idValid, setIdValid] = useState(null);
  const [pwValid, setPwValid] = useState(null);
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const context = useContext(AuthContext);

  const checkIdValid = (input) => {
    return validEmail.test(input);
  };

  const checkPwValid = (input) => {
    return validPassword.test(input);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    idValid && pwValid && context.onLogin(idValue);
  };

  const idChangeHandler = (e) => {
    setIdValue(e.target.value);
  };

  const pwChangeHandler = (e) => {
    setPwValue(e.target.value);
  };

  useEffect(() => {
    const check = setTimeout(() => {
      const idCheckResult = idValue ? checkIdValid(idValue) : null;
      const pwCheckResult = pwValue ? checkPwValid(pwValue) : null;
      setIdValid(idCheckResult);
      setPwValid(pwCheckResult);
    }, 500);
    return () => {
      clearTimeout(check);
    };
  }, [idValue, pwValue]);

  const idClasses = `${styles['login-id']} ${
    idValid === false ? styles['invalid'] : ''
  }  ${idValid ? styles['valid'] : ''}`;

  const pwClasses = `${styles['login-pw']} ${
    pwValid === false ? styles['invalid'] : ''
  }  ${pwValid ? styles['valid'] : ''}`;

  const submitBtnClasses = `${styles['login-submit']} ${
    idValid && pwValid ? styles['valid'] : styles['invalid']
  }`;

  return (
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
        disabled={!idValid || !pwValid}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
