import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home"
import Login from "../pages/login"
import DashBoard from "../pages/dashboard"
import Sign from "../pages/sign"

function App() {
  return (
      <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='dash' element={<DashBoard/>}/>
          <Route path='sign' element={<Sign/>}/>
      </Routes>
  );
}
export default App;
