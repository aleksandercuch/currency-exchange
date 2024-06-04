// CORE
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // import of Router is required to work Route's path

// PAGES
import MainPage from './views/MainPage';
import CurrencyPage from './views/CurrencyPage';
import SettingsPage from './views/SettingsPage';

// LAYOUT
import Navbar from 'components/Navbar/Navbar';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Navbar />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/currency/:currency" element={<CurrencyPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Content>
            <Footer style={{ textAlign: 'center' }}>Currency Exchange ©2024</Footer>
      </Layout>
    </Router>
  );
};

export default AppRouter;