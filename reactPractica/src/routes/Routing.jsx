//import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} />
     </Routes>
    </Router>
   );
};
export default Routing;
