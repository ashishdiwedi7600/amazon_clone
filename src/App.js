import React from 'react';

import { useRoutes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';



function App() {

  const routes= useRoutes([
    {path:'/',element:<Dashboard/>}
  ])
  return (
   <>
   {routes}
   
    
  
   </>
  );
}

export default App;
