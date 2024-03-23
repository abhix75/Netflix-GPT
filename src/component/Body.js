import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body = () => {
    const appRoute = createBrowserRouter([{
        path:'/',
        element:<Login/>
    },
    {
        path:'/browser',
        element:<Browser/>
    }
])
  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body