import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Courses from './components/pages/Courses'

const router = createBrowserRouter([
  {
      path : '/',
      element : <Home></Home>
  },
  {
    path : '/Courses',
    element : <Courses></Courses>
},
  {
    path : '/services',
    element : <Services></Services>
},
{
  path : '/products',
  element : <Products></Products>
},
{
  path : '/sign-up',
  element : <SignUp></SignUp>
}
])
function App() {
  return (
    <>
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
    </>
  );
}

export default App;
