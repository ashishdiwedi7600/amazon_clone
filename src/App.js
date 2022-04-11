import React from 'react';
import Drawer1 from './common/sidemenu/drawer1'
import './App.css';

// import Echo from './common/echo'
import { useRoutes } from 'react-router-dom';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const routes = useRoutes([
    {path:"/",element:<Drawer1/>},
    // {path:"/echo",element:<Echo/>}
  ])
  return routes
}

export default App;
