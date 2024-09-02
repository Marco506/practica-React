//import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
     </Routes>
    </Router>
   );
};
export default Routing;
