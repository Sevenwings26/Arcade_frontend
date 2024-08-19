import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import { AuthProvider }  from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import About from './pages/About'
import Designers from './pages/Designers'



const App = () => {

  return (
    <div className='App'>
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/dashboard' element={
                <ProtectedRoute>
                  {/* <Dashboard/> */}
                  <Designers/>
                </ProtectedRoute>
              } />
              <Route path='/login' element= {<Login/>}/>
              <Route path='/register'  element= {<Register/>} />
              <Route path='/blog'  element= {<Blog/>} />
              <Route path='/about'  element= {<About/>} />
              <Route path='/designers'  element= {<Designers/>} />
              <Route path='/' exact element= {<Home/>}/>
            </Routes>
          </AuthProvider>
        </Router>
        {/* <button>Click Me</button> */}
      </div>
    </div>
  )
}

export default App