import React from 'react';
import Drawer1 from './common/sidemenu/drawer1'
import './App.css';
import { useRoutes } from 'react-router-dom';


function App() {
  const routes = useRoutes([
    {path:"/",element:<Drawer1/>},

  ])
  return routes
}

export default App;

