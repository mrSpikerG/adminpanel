import logo from './logo.svg';
import './App.css';
import './style/style2.css'
import './style/vendor.bundle.base.css'
import './style/vendors/materialdesignicons.min.css'

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import AdminACL from './pages/AdminACL';
import Management from './pages/Management';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes >
        <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminACL />} />
          <Route path="/manager" element={<Management />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
