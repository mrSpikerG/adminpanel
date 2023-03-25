import logo from './logo.svg';
import './App.css';
import './style/style2.css'
import './style/vendor.bundle.base.css'
import './style/vendors/materialdesignicons.min.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import AdminACL from './pages/AdminACL';
import Management from './pages/Management';
import LoginPage from './pages/LoginPage';
import PageBase from './pages/PageBase';
import ForgotPassword from './pages/ForgotPassword';
import SpecialOffers from './pages/SpecialOffers';
import Storage from './pages/Storage';
import Dashboard from './pages/Dashboard';
import UserOffers from './pages/UserOffers';
import CategoryManage from './pages/CategoryManage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPassword />} />


          <Route path="/main" element={<PageBase role="All"/>}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/admin" element={<PageBase role="Admin"/>}>
            <Route path="acl" element={<AdminACL />} />
            <Route path="specialoffer" element={<SpecialOffers />} />
            <Route path="useroffers" element={<UserOffers />} />
          </Route>

          <Route path="/manager" element={<PageBase role="Manager"/>}>
            <Route path="items" element={<Management />} />
            <Route path="category" element={<CategoryManage />} />
            <Route path="storage" element={<Storage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
