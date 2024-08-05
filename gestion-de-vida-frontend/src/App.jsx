import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Body from './components/body/body';  // Asegúrate de que este componente esté definido
import LoginForm from './components/loginform/loginform';  // Asegúrate de que este componente esté definido
import Header from './components/header/header';
import Home from './components/home/home';  // Asegúrate de que este componente esté definido
import './app.css';

const App = () => {
  const location = useLocation();
  const showHeader = location.pathname != '/';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;