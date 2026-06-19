import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" end className="brand-link">
        <span className="brand-mark">SC</span>
        <span>
          <strong>Smart Citizen App</strong>
          <small>Dashboard</small>
        </span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/home" end>
          Home
        </NavLink>

        <NavLink to="/services">
          Services
        </NavLink>

        <NavLink to="/schemes">
          Schemes
        </NavLink>

        <NavLink to="/feedback">
          Feedback
        </NavLink>

        <NavLink to="/notifications">
          Notifications
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>

        <NavLink to="/signup">
          Signup
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar