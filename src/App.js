import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

const router = createBrowserRouter([
  {
      path : '/',
      element : <Home></Home>
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
