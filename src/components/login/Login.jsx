import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <aside className="login">
      <h1 className="login-title sr-only">Logiin</h1>
      <form className="login-form">
        <input
          type="text"
          name="id"
          id="id"
          className="login-id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          required
          pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="login-pw"
          placeholder="비밀번호"
          required
        />
        <button type="submit" className="login-submit">
          로그인
        </button>
      </form>
      <hr className="sr-only" />
      <a href="#" className="login-fb">
        Facebook으로 로그인
      </a>
      <a href="#" className="forget-pw">
        비밀번호를 잊으셨나요?
      </a>
    </aside>
  );
};

export default Login;
