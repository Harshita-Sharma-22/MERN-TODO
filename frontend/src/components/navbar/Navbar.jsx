import React from 'react'
import "./Navbar.css"
import { MdLibraryBooks } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="#"><b> <MdLibraryBooks /> TO-DO</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/todo">
            <img className='img-fluid user-png' src='frontend/src/components/navbar/login-avatar.png' alt='/'/>Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/signup">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/">Logout</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar


