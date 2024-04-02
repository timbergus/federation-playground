import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// @ts-expect-error We need to define the types for this imports.
import Home from 'home/App'
// @ts-expect-error We need to define the types for this imports.
import Profile from 'profile/App'
// @ts-expect-error We need to define the types for this imports.
import About from 'about/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)
