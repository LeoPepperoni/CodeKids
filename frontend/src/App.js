import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'
import Practice from './pages/Practice'
import ForgotPassword from './pages/forgot-password'
import About from './pages/About'
import TestAll from './pages/TestAll'
import PracticeAll from './pages/PracticeAll'
import HintContent from './components/HintContent'
import QuestionContent from './components/QuestionContent'
import Navbar from './components/Navbar'
import Learn1 from './pages/Learn1'
import Learn2 from './pages/Learn2'
import Learn3 from './pages/Learn3'
import Learn4 from './pages/Learn4'
import Learn5 from './pages/Learn5'
import SubmitTestAllModal from './components/SubmitTestAllModal'
import SubmitTestModal from './components/SubmitTestModal'
import Admin from './pages/Admin'

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
              path="/TestAll"
              element={<TestAll />}
            />

            <Route
              path="/SubmitTestAllModal"
              element={<SubmitTestAllModal />}
            />

            <Route
              path="/SubmitTestModal"
              element={<SubmitTestModal />}
            />

            <Route
              path="/PracticeAll"
              element={<PracticeAll />}
            />

            <Route
              path="/Learn1/:moduleName"
              element={<Learn1 />}
            />

            <Route
              path="/Learn2/:moduleName"
              element={<Learn2 />}
            />

            <Route
              path="/Learn3/:moduleName"
              element={<Learn3 />}
            />

            <Route
              path="/Learn4/:moduleName"
              element={<Learn4 />}
            />

            <Route
              path="/Learn5/:moduleName"
              element={<Learn5 />}
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

            <Route
              path="/admin"
              element={<Admin />}
            />  

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
