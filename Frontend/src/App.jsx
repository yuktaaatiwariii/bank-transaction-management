import React from 'react'
import { Routes, Route , Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import LoginPage from "./components/LoginPage.jsx"
import RegisterPage from './components/RegisterPage.jsx';
import DashboardPage from "./components/DashboardPage.jsx";
import toast,{Toaster} from "react-hot-toast";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { axiosInstance } from './lib/axios.js'

const App = () => {

const{data:authData, isLoading, error} = useQuery({
   queryKey: ['authUser'],
   queryFn: async () => {
      const res = await axiosInstance.get('/auth/me');
      return res.data;
   },
   retry:false,
  });


const authUser = authData?.user

  return (
  
   <div>

    {/* jb koi api k through pass krnas chahe so we have protect api */}
    
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/register" element={ !authUser ? <RegisterPage />: <Navigate to="/dashboard" />} />
        <Route path="/login" element={!authUser ? <LoginPage />: <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={authUser ? <DashboardPage/> : <Navigate to="/login"/>} />
      </Routes>

<Toaster/>

</div>
  )
}

export default App
