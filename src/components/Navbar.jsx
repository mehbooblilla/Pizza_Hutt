import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/Navbar.css'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <img src={Logo} alt="logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  

  <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4">
      <li className="nav-item active">
          <Link to='/'>
          <a className="nav-link aTag"  >Home </a>
          </Link>
        
      </li>
      <li className="nav-item">
      <Link to='/menu'>
          <a className="nav-link aTag"  >Menu </a>
          </Link>
      </li>
      
      <li className="nav-item">
      <Link to='/about'>
          <a className="nav-link aTag"  >About</a>
          </Link>
      </li>
      <li className="nav-item">
      <Link to='/contact'>
          <a className="nav-link aTag"  >Contact Us </a>
          </Link>
      </li>
    </ul>
  </div>
  
 
</nav>
    
  )
}

export default Navbar
