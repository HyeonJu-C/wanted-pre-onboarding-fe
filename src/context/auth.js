import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [logInState, setLogInState] = useState(false);

  const loginHandler = (id, pw) => {
    localStorage.setItem('isLoggedIn', '1');
    setLogInState(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
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
