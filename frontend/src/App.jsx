import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
