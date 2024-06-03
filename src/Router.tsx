// CORE
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // import of Router is required to work Route's path

// PAGES
import MainPage from './views/MainPage';
import CurrencyPage from './views/CurrencyPage';
import SettingsPage from './views/SettingsPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/currency/:currency" element={<CurrencyPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default AppRouter;