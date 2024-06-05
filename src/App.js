// import logo from './logo.svg';


import './App.css';
import './Components/css/style.css'
import './Components/css/responsive-stylee.css'
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import BeautyCat from './Components/BeautyCat';
import YourProfile from './Components/YourProfile';
import Addresses from './Components/Addresses';
import Mamacash from './Components/Mamacash';
import Referral from './Components/Referral';
import Paymentmode from './Components/Paymentmode';
import Beauty from './Components/Beauty';
import Orders from './Components/Orders';
import ContactUs from './Components/ContactUs';
import ProductDetail from './Components/ProductDetail';


function App() {
  return (
    <React.Fragment>

   
    
    
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/beautycat" element={<BeautyCat />} />
        <Route exact path="/beauty" element={<Beauty/>} />
        <Route exact path="/yourprofile" element={<YourProfile />} />
        <Route exact path="/addresses" element={<Addresses />} />
        <Route exact path="/mamacash" element={<Mamacash/>} />
        <Route exact path="/referral" element={<Referral/>} />
        <Route exact path="/paymentmode" element={<Paymentmode/>} />
        
        <Route exact path="/orders" element={<Orders/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/productdetail" element={<ProductDetail/>} />

          
        
      </Routes>

   
    
    </React.Fragment>
  );
}

export default App;
