import React from 'react'
import {Link} from "react-router-dom";
const AdminNav = () => {
  return (
    <div>
        <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          DASHBOARD
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/home" className="nav-link">
          HOME
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/edit" className="nav-link">
          EDIT POST
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/create" className="nav-link">
          CREATE POST
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
          Sub Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
          Coupon
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>
    </ul>
  </nav>
    </div>
  )
}

export default AdminNav