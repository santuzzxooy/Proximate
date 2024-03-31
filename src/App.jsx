import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import useFetchLogin from './services/useFetchLogin';
// import useFetchProducts from './services/useFetchProducts';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Services from './pages/Services';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/welcome',
    element: <Welcome />
  },
  {
    path: '/services',
    element: <Services />
  },
])

function App() {
  return (
      <div className='App'>

        <Header />
        <Sidebar />

        <RouterProvider router={router} />

        {/* <Router>
          <Switch>
            <Route path="/login" component={useFetchLogin} />
            <Route path="/services" component={useFetchProducts} />
          </Switch>
        </Router> */}
        
        {/* SI LO HAGO ASI SE QUEDA EN BLANCO */}

        

        <Footer />
      </div>
  );
}

export default App;
