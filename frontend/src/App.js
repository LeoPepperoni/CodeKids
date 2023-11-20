import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import Learn from './pages/Learn'
import Test from './pages/Test'
import Practice from './pages/Practice'
import ForgotPassword from './pages/forgot-password'
import About from './pages/About'
import TestAll from './pages/TestAll'
import PracticeAll from './pages/PracticeAll'
import HintContent from './components/HintContent'
import QuestionContent from './components/QuestionContent'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App main-background">
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

            <Route
              path="/testall"
              element={<TestAll />}
            />

            <Route
              path="/PracticeAll"
              element={<PracticeAll />}
            />

            <Route
              path="/learn/:moduleID/:moduleName"
              element={<Learn />}
            />

            <Route 
              path="/forgot-password"
              element={<ForgotPassword />}
            />

            <Route path="/practice/:moduleID/:moduleName" element={<Practice />}>
              <Route path=":questionNumber" element={<QuestionContent />} />
              <Route path=":questionNumber/hint" element={<HintContent />} />
            </Route>


            <Route path="/test/:moduleID/:moduleName" element={<Test />}>
              <Route path=":questionNumber" element={<QuestionContent />} />
            </Route>

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
