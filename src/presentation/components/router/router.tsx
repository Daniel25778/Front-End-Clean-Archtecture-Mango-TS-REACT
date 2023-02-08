import Login from '@/presentation/pages/login/login'
import React from 'react'
import { Routes } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import '@/presentation/styles/global.scss'
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
