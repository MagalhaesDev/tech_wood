import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { HelpDesk } from './pages/HelpDesk'
import { Inventory } from './pages/Inventory'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/inventory" element={<Inventory />} />
        </Route>
    </Routes>
  )
}