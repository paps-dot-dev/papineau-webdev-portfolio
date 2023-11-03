import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'

function App() {
  return (
    <>
      <MainLayout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </MainLayout>
    </>
  )
}

export default App
