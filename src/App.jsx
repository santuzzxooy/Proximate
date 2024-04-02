import './App.css';
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from './pages/Login';
import Services from './pages/Services';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/proximate',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/services/:id',
    element: <ProductDetail />
  },
])

function App() {
  return (
      <div className='App'>

        <Header />
        <Sidebar />

        <div className='simple-container'>
        <RouterProvider router={router} />
        </div>

        <Footer />
      </div>
  );
}

export default App;
