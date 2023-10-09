import { Route, Routes } from 'react-router-dom'
import { Login } from '../../screens/Auth/Login'
import { Register } from '../../screens/Auth/Register'

export function RouterApp() {
  return (
    <Routes>
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />
    </Routes>
  )
}
