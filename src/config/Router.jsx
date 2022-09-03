import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Register from "../Pages/Register/Register"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Login from "../Pages/Login/Login";

function Routers() {
  return (
    <Router>
        <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </Router>
  );
}

const PageNotFound = () => {
  return(
    <>
      <h1>404</h1>
      <p>Page not found</p>
    </>
  )
}


export default Routers;