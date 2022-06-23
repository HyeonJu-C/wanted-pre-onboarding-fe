import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [logInState, setLogInState] = useState(false);

  const loginHandler = (id) => {
    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('id', id);
    setLogInState(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('id');
    setLogInState(false);
  };

  useEffect(() => {
    if (localStorage.isLoggedIn === '1') {
      setLogInState(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: logInState,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
