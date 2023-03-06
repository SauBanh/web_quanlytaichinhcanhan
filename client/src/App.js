import React from "react";
import Revenue from "./pages/Revenue/Revenue"
import Spending from "./pages/Spending/Spending"
import Home from "./pages/Home/Home"
import Accumulate from "./pages/Accumulate/Accumulate"



import { Routes, Route, Link } from "react-router-dom";

import classes from './App.module.scss';
import Sidebar from "./shares/Sidebar/Sidebar";

function App() {
  
  return (
    <div className={classes.App}>      
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="spending" element={<Spending />} />
          <Route path="accumulate" element={<Accumulate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;