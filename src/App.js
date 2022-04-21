import React from 'react'
import './app.css'
import Drawer1 from './common/sidemenu/drawer1'
import Echo from './common/subsidemenu/echo'
import Firelite from './common/subsidemenu/firelite'
import Kindle from './common/subsidemenu/kindle'
import { useRoutes } from 'react-router-dom';
function App() {

  const routes = useRoutes([
    {
      path:"/" ,element:<Drawer1/> },
    {
      path:"/echo", element:<Echo/> },
    {
      path:"/firelite", element:<Firelite/> },
    {
      path:"/kindle", element:<Kindle/>
    }
  ])

  return routes;

}


export default App;

