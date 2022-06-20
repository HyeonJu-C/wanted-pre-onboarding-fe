import React, { useContext } from 'react';
import MainPage from './pages/main/main';
import LoginPage from './pages/login/login';
import AuthContext from './context/auth';

function App() {
  const context = useContext(AuthContext);
  return (
    <>
      {context.isLoggedIn && <MainPage />}
      {!context.isLoggedIn && <LoginPage />}
    </>
  );
}

export default App;
