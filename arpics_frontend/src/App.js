import React,{useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);
  return (
    <GoogleOAuthProvider clientId="909341907632-5bbqq7pfvv9f0b71c29o6mqj3fhugukr.apps.googleusercontent.com">
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/*' element={<Home/>} />
    </Routes>
    </GoogleOAuthProvider>
    
  )
}

export default App