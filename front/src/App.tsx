import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Header from './components/common/Header'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />}></Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<></>}>Dashboard</Route>
          <Route path="/admin" element={<></>}>Admin</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
