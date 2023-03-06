import React from 'react'

import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/revenue">Quản lý doanh thu</Link>
          </li>
          <li>
            <Link to="/spending">Quản lý chi tiêu</Link>
          </li>
          <li>
            <Link to="/Accumulate">Tích lũy</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      <Outlet />
    </div>
  )
}

export default Sidebar