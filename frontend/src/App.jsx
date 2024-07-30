import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/admin/Login';
import AddDetails from './components/admin/AddDetails';
import ViewDetails from './components/admin/ViewDetails';
import UpdateDetails from './components/admin/UpdateDetails';
import Protect from './components/admin/Protect';
import UserReg from './components/admin/UserReg';
import UserLogin from './components/admin/UserLogin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user-register' element={<UserReg />} />
        <Route path='/user-login' element={<UserLogin />}/>
        <Route element={<Protect/>}>
          <Route path='/add' element={<AddDetails />}/>
          <Route path='/view' element={<ViewDetails/>}/>
          <Route path='/update/:id' element={<UpdateDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
