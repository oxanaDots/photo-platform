import SignUp from './forms/SignUp'
import SignIn from './forms/SignIn'
import { FormProvider } from './forms/FormContent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Home/Home'
import NewBooking from './booking/NewBooking'
import Sidebarmenu from './User/Sidebarmenu'
import Dashboard from './User/Dashboard'
import Settings from './User/Settings/MyDetails'
import MyDetails from './User/Settings/MyDetails'
import Account from './User/Settings/Account'

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path:"/signin",
    element: <SignIn/>
  },
  { path: '/',
    element: <Home/>
  },
    { path: '/home',
    element: <Home/>
  },
  { path: '/newbooking',
    element: <NewBooking/>
  },

  { path: '/mysettings/mydetails',
    element: <MyDetails/>
  },
  { path: '/mydashboard',
    element: <Dashboard/>
  },
  { path: '/mysettings/account',
    element: <Account/>
  },
])

function App() {


  return (
    <>
 
  <FormProvider>
    <RouterProvider router={router}/>
  </FormProvider>
  </>
  )
}

export default App
