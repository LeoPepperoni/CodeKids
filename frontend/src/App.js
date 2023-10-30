import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & componentss
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
