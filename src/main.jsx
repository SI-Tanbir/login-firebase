import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'




let router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,

    children:[
      {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    }
  
  ]
}

])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
    
  </StrictMode>

);
