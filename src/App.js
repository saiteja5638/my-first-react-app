import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';


const router = createBrowserRouter([
  {
      path : '/',
      element : <Home></Home>
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
