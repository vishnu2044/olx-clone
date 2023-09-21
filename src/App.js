import './App.css';
import React, { useEffect, useContext } from 'react';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Components/Login/Login';
import View from './Components/View/View';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AuthContext, FirebaseContext} from './store/FirebaseContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Create from './Components/Create/Create';
import Post from './store/PostContext';

function App() {
  const {user, setUser} = useContext(AuthContext)

  useEffect(()=>{
    const auth = getAuth();
    console.log("username ::::" + user)
    onAuthStateChanged(auth, (user) =>{
      if (user) {
        setUser(user)
        const uid = user.uid
        console.log("user is signed in")
      }else{
        console.log("user is signed out")
      }
    })

  })

  return (
    <div>
      <Post>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/views" element={<View />} />
          </Routes>
        </BrowserRouter>

      </Post>

    </div>
  );
}

export default App;
