import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/home/Home'
import Validation from './pages/validation/Validation'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/syncwallet",
    element: <Validation />
  }
])
  // createRoutesFromElements(
  //   <Route path='/' exact element={<Home />}>
  //     <Route path='syncwallet' element={<Validation />} />
  //   </Route>
  // )

// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
