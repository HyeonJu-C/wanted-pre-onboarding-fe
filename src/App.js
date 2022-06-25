import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/main';
import LoginPage from './pages/login/login';

function App() {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
