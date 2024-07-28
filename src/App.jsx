import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Services from './Services';
import Contact from './Contact';
import Account from './Account';
import Base from './Base';
import Cart from './Cart';
function App() {
  const [loggedOut , setLoggedOut] = useState(false)
  const [signed, setSigned] = useState(false);

  useEffect(()=>{
    if(loggedOut){
      toast.success("Logged Out Successfully !")
    }
  },[loggedOut])
  

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={signed ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn setSigned={setSigned} />} />
        <Route path="/signup" element={<SignUp setSigned={setSigned} />} />
        <Route path="/home" element={<Home setSigned={setSigned} setLoggedOut={setLoggedOut} />} />
        <Route path='/account' element={<Account />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/base' element={<Base />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;
