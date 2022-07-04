import styles from './Register.module.css';
import React from 'react';

const Register = () => {
  return (
    <section className={styles['register-container']}>
      <h1 className={styles['register-title']}>계정이 없으신가요?</h1>
      <a className={styles['register-link']} href="#">
        가입하기
      </a>
    </section>
  );
};

export default Register;
