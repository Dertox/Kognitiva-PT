import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './contexts/ContentContext';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { KbtInfo } from './pages/KbtInfo';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ContentProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="kbt" element={<KbtInfo />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ContentProvider>
    </HashRouter>
  );
};

export default App;