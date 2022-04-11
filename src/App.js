import React from 'react';
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';


function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> }
  ])
  return (
    <>
      {routes}
    </>
  )
}


export default App;
