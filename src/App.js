
import './App.css';
import LoginPage from './pages/login-page/login-page';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/admin/admin';
import ProtectedRoute from './components/protected-route';
import GuardProtectedRoute from './components/guard-protected-route';


function App() {
  return (
    <div>
      <Toaster richColors/>
      <Router>
        <Routes>
          <Route path="/login" element={
            <GuardProtectedRoute>
              <LoginPage />
            </GuardProtectedRoute>
          } />
          <Route path="/" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
