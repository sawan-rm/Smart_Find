import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/signUp'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
