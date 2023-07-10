import './App.css'
import AddCustomerFormikYup from '../src/pages/homePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import SignInPage from './pages/signInPage'
import UsersPage from './pages/usersPage'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AddCustomerFormikYup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </div>
  )
}

export default App
