import React, { useState, useEffect } from 'react';
import Main from './pages/main/main';
import Render from './pages/render/render';

function App() {
  const [logInState, setLogInState] = useState(false);

  const onLoginHandler = (id, pw) => {
    localStorage.setItem('isLoggedIn', '1');
    setLogInState(true);
  };

  const onLogoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setLogInState(false);
  };

  useEffect(() => {
    if (localStorage.isLoggedIn === '1') {
      setLogInState(true);
    }
  }, []);

  return (
    <div>
      {logInState && <Main onLogout={onLogoutHandler} />}
      {!logInState && <Render onLogin={onLoginHandler} />}
    </div>
  );
}

export default App;
