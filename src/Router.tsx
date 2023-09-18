import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Graphics } from './pages/Graphics'

export function Router() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/graficos" element={<Graphics />} />
        </Route>
    </Routes>
  )
}