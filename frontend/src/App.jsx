import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Login from './pages/Login'
import PrivateRoute from './pages/PrivateRoute'
import { useState } from 'react'
import Contact from './pages/Contact'

function App() {
  const [user, setUser] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (data) => {
    setUser(data)
    setLoggedIn(true)
  }

  console.log(user)
  console.log(loggedIn)

  return (
    <div className='bg-black text-white m-0'>
      <Router>
        <Routes>
          <Route path='/' element={<Login handleLogin={handleLogin} />} />
          <Route element={<PrivateRoute loggedIn={loggedIn} />}>
            <Route path='/home' element={<Home user={user} />} />
            <Route path='/projects' element={<Projects user={user} />} />
            <Route path='/contact' element={<Contact user={user} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
