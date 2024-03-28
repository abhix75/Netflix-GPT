import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
const Body = () => {
  const dispatch = useDispatch();
  const appRoute = createBrowserRouter([{
    path: '/',
    element: <Login />
  },
  {
    path: '/browser',
    element: <Browser />
  }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        // ...
      } else {
        // User is signed out
        dispatch(
          removeUser()
        );
      }
    });
  }, [])
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body