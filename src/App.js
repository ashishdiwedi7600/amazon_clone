


import Dashboard from './dashboard/dashboard';
import './app.css'
import Home from '../src/Pages/Home'

import React, { useState } from 'react';
import Signup from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import HomePage from './Pages/homePage';
import SignIn2 from './components/signIn/signIn2';
import SigninPopover from './popovers/signinPopover';
import { useRoutes } from 'react-router-dom';
function App() {

  const routes = useRoutes([
    {
      path:"/" ,element:<Dashboard/>
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
