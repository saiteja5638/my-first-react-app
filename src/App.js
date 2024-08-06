import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Courses from './components/pages/Courses';
import Dashboard from './components/pages/Dashboard';
import Creater from './components/pages/Creater';
import View from './components/pages/View_Detail';

const router = createBrowserRouter([
  {
      path : '/',
      element : <Home></Home>
  },
  {
    path : '/creater',
    element : <Creater></Creater>
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
},
{
  path : '/dashboard',
  element : <Dashboard></Dashboard>
},
{
  path : '/view_detail',
  element : <View></View>
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
