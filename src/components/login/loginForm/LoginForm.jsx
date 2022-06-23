import React, { useState, useRef, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth';
import styles from './LoginForm.module.css';

const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

const LoginForm = (props) => {
  const idElement = useRef();
  const pwElement = useRef();
  const [idValid, setIdValid] = useState(null);
  const [pwValid, setPwValid] = useState(null);
  const [idValue, setIdValue] = useState(null);
  const [pwValue, setPwValue] = useState(null);
  const context = useContext(AuthContext);

  const checkIdValid = (input) => {
    return validEmail.test(input);
  };

  const checkPwValid = (input) => {
    return validPassword.test(input);
  };

  const onSubmitHandler = (e) => {
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
      console.log('checking');
      const idCheckResult = idValue ? checkIdValid(idValue) : null;
      const pwCheckResult = pwValue ? checkPwValid(pwValue) : null;
      setIdValid(idCheckResult);
      setPwValid(pwCheckResult);
    }, 500);
    return () => {
      clearTimeout(check);
    };
  }, [idValue, pwValue]);

  return (
    <form className={styles['login-form']} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="id"
        id="id"
        className={`${styles['login-id']} ${
          idValid === false ? styles['invalid'] : ''
        }  ${idValid ? styles['valid'] : ''}`}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        required
        onChange={idChangeHandler}
        ref={idElement}
      />
      <input
        type="password"
        name="password"
        id="password"
        className={`${styles['login-pw']} ${
          pwValid === false ? styles['invalid'] : ''
        } ${pwValid ? styles['valid'] : ''}`}
        placeholder="비밀번호"
        required
        onChange={pwChangeHandler}
        ref={pwElement}
      />
      <button
        type="submit"
        className={`${styles['login-submit']} ${
          idValid && pwValid ? styles['valid'] : styles['invalid']
        }`}
        disabled={!idValid || !pwValid}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
