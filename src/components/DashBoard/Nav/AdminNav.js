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
        <Link to="/" className="nav-link">
          HOME
        </Link>
      </li>

     

      <li className="nav-item">
        <Link to="/create" className="nav-link">
          CREATE POST
        </Link>
      </li>

   </ul>
  </nav>
    </div>
  )
}

export default AdminNav