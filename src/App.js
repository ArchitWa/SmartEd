import logo from './assets/logo.png';
import './App.css';

import WithNav from './components/navs/WithNav';
import WithoutNav from './components/navs/WithoutNav';
import Home from "./components/Home"
import Forum from './components/forum/Forum'
import Dashboard from './components/dashboard/Dashboard'
import SignUp from './components/SignUp'


import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithNav />}>
          
          {/* <Route path='/resources' element={<Resources/>} />
          <Route path='/events' element={<Events/>} /> */}

          <Route path='/forum' element={<Forum/>} />
        </Route>

        <Route element={<WithoutNav />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard/>} />

          <Route exact path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

