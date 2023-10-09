import { Route, Routes } from 'react-router-dom'
import { Login } from '../screens/Auth/Login'
import { Register } from '../screens/Auth/Register'
import { Home } from '../screens/Home'

export function RouterApp() {
  return (
    <Routes>

      {/* AUTH */}
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />

      <Route path='/' element={<Home />} />
    </Routes>
  )
}
