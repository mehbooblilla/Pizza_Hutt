import React from 'react'
import '../styles/Home.css';
import { Link } from 'react-router-dom'
import backgroundImg from '../assets/HOME_Background.jpg';
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${backgroundImg})` }}>
      <div className='headerContainer'>
      <h2>WE COOKED YOUR DESIRED<br/> PIZZA RECIPE</h2>
      <Link to='/menu'>
        <button>ORDER NOW</button>
      </Link>
      </div>
    </div>
  )
}

export default Home
