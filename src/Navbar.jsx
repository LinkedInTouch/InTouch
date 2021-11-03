import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
      <nav className="navBar">
        <div className="links">
        <ul>
           <li>
            <Link to="/connections">Connections</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
        </div>
      </nav>
  )
}
