import React, { useState, useRef } from 'react';
import styles from './LoginForm.module.css';
import AuthContext from '../../../context/auth';
import { useContext } from 'react';

const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

const LoginForm = (props) => {
  const idElement = useRef();
  const pwElement = useRef();
  const [idState, setIdState] = useState({ value: '', isValid: null });
  const [pwState, setPwState] = useState({ value: '', isValid: null });
  const context = useContext(AuthContext);

  const checkIdValid = (input) => {
    console.log(validEmail.test(input));
    return validEmail.test(input);
  };

  const checkPwValid = (input) => {
    console.log(validPassword.test(input));
    return validPassword.test(input);
  };

  const onSubmitHandler = (e) => {
    idElement.current.value = '';
    pwElement.current.value = '';
    context.onLogin(idState.value, pwState.value);
  };

  const idChangeHandler = (e) => {
    const idInput = e.target.value;
    const idValid = checkIdValid(idInput);
    setIdState({ value: idInput, isValid: idValid });
  };

  const pwChangeHandler = (e) => {
    const pwInput = e.target.value;
    const pwValid = checkPwValid(pwInput);
    setPwState({ value: pwInput, isValid: pwValid });
  };

  return (
    <form className={styles['login-form']} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="id"
        id="id"
        className={`${styles['login-id']} ${
          idState.isValid === false ? styles['invalid'] : ''
        }  ${idState.isValid === true ? styles['valid'] : ''}`}
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
          pwState.isValid === false ? styles['invalid'] : ''
        } ${pwState.isValid === true ? styles['valid'] : ''}`}
        placeholder="비밀번호"
        required
        onChange={pwChangeHandler}
        ref={pwElement}
      />
      <button
        type="submit"
        className={`${styles['login-submit']} ${
          idState.isValid && pwState.isValid
            ? styles['valid']
            : styles['invalid']
        }`}
        disabled={!idState.isValid || !pwState.isValid}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
