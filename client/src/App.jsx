import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton
} from '@clerk/clerk-react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Dashboard from './pages/Dashboard';


function App(){
  return (
   <BrowserRouter>
      <Routes>
        <Route 
          path='/sign-in' element= {<SignIn routing="path" path="/sign-in" />}
        />

        <Route 
          path='/sign-up' element= {<SignUp routing="path" path="/sign-up" />}
        />

        <Route 
          path='/'
          element={
            <>
              <SignedIn>
                <Dashboard/>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
   </BrowserRouter>
  )
}

export default App
