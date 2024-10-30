import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
