import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        loader:()=> fetch('./data.json'),
        element:<BookDetails></BookDetails>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
