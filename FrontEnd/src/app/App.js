import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home"
import Login from "../pages/login"
import DashBoard from "../pages/dashboard"
import Sign from "../pages/sign"
import Car from "../pages/car"
import Customer from "../pages/customer"
import Driver from "../pages/driver"

function App() {
  return (
      <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='dash' element={<DashBoard/>}/>
          <Route path='sign' element={<Sign/>}/>
          <Route path='car' element={<Car/>}/>
          <Route path='customer' element={<Customer/>}/>
          <Route path='driver' element={<Driver/>}/>
      </Routes>
  );
}
export default App;
