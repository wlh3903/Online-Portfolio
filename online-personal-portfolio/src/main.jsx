import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <AboutMe />},
  {path: '/resume', element: <Resume />}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
