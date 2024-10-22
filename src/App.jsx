import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Order from './pages/order/Order';
import Nopage from './pages/nopage/Nopage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import MyState from './context/data/myState';

function App() {

  return (
    <MyState>

      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/*" element={<Nopage/>} />
          </Routes>
        <Footer/>
      </Router>

    </MyState>
  )
}

export default App