


import Dashboard from './dashboard/dashboard';



import React, { useState } from 'react';
import './App.css'
import Signup from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import HomePage from './Pages/homePage';
import SignIn2 from './components/signIn/signIn2';
import { useRoutes } from 'react-router-dom';
function App() {

  const routes = useRoutes([
    {
      path:"/" ,element:<HomePage/>
    },
    {
      path:'signIn2',element:<SignIn2/>
    },
    {
      path:'signup',element:<Signup/>
    }
  ])

  return routes;

}


export default App;
