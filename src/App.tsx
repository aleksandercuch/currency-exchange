// CORE
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom'; // TODO: move routing code to separate file - Router.tsx / Routes.tsx
import AppRouter from 'Router';

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
            <AppRouter />
          </Content>
            <Footer style={{ textAlign: 'center' }}>Currency Exchange ©2024</Footer>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;