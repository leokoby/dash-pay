import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import './index.css'

import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import DashBoard from './pages/Dash/DashBoard.tsx'
import AppContext from './context/AppContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dash',
        element: <DashBoard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContext>
      <Header/>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>,
)
