// CORE
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // TODO: move routing code to separate file - Router.tsx / Routes.tsx

// PAGES 
import  MainPage  from './views/MainPage';
import CurrencyPage from './views/CurrencyPage'; 
import SettingsPage from './views/SettingsPage';

// LAYOUT
import MainNav from 'components/layout/MainNav';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const queryClient = new QueryClient();



const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Header>
            <MainNav />
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
    </QueryClientProvider>
  );
};

export default App;