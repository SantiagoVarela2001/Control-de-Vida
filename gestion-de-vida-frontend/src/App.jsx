import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './components/loginform/loginform';
import Header from './components/header/header';
import Home from './components/home/home';
import ExpenseController from './components/expenseController/expenseController';
import './app.css';
import About from './components/about/about';

const App = () => {
  const location = useLocation();
  const showHeader = location.pathname != '/';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expenses" element={<ExpenseController />} />
      </Routes>
    </div>
  );
};

export default App;