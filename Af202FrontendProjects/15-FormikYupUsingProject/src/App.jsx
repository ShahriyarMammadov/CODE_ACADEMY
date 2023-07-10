import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './assets/pages/loginPage'
import SignUpPage from './assets/pages/signUpPage'
import UsersPage from './assets/pages/usersPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/users' element={<UsersPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
