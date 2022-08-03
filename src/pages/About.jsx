import React from 'react'
import aboutImage from '../assets/multiplePizzas.jpeg'
import '../styles/About.css';
import img from '../assets/expensive.jpg'
import img2 from '../assets/makingpizza.jpeg'
import img3 from '../assets/multiplePizzas.jpeg'
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${aboutImage})` }}></div>
      <div className='aboutBottom'>
        <h2>ABOUT US</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam soluta quod cumque deserunt laborum beatae vitae illo tempore,
          alias assumenda voluptatibus accusamus amet qui nisi odit. Laborum nisi quod excepturi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur impedit quidem reiciendis omnis quam fugiat
          consequatur excepturi quas temporibus qui veritatis officiis nam nihil vitae, et sunt ullam pariatur.
        </p>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={img} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img3} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default About