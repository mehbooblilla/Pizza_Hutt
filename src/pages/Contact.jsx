import React from 'react'
import '../styles/Contact.css';
import leftSideImage from '../assets/makingpizza.jpeg'
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${leftSideImage})` }}></div>
        <div className='rightSide'>
            <h2>Contact Us</h2>
            <form id='contact-form' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' placeholder='Full Name...' required />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email ID...' required />
                <label htmlFor="message">Message</label>
                <textarea name="message" cols="30" rows="6" placeholder='Enter Message Here...' required></textarea>
                <button type='submit'> Send Message</button>
            </form>

        </div>
    </div>
  )
}

export default Contact