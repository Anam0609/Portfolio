import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <>
      <nav id='navbar' className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          Anam
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links nav-link'>
                <span>Home</span>
              </Link>
              </li>
              <li className='nav-item active'>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links nav-link'>
                <span>About</span>
              </Link>
              </li>
              <li className='nav-item active'>
              <Link
                activeClass='active'
                to='work'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links nav-link'>
                <span>Portfolio</span>
              </Link>
              </li>
              <li className='nav-item active'>
                <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links nav-link'>
                <span>Skills</span>
              </Link>
              </li>
              <li className='nav-item active'>
                <Link
                activeClass='active'
                to='testimonials'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links nav-link'>
                <span>Testimonials</span>
              </Link>
              </li>
              <li className='nav-item active'>
                <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links nav-link'>
                <span>Contact</span>
              </Link>
              </li>
            </ul>
          </div>
      </nav>

      <section className='fh5co-top-banner' id='home'>
        <div className='top-banner__inner site-container'>
          <div className='top-banner__image'>
            <img src={require('../images/Me.jpg')} alt='image'/>
          </div>
          <div className='top-banner__text'>
            <div className='top-banner__text-up'>
              <span className='brand-span'>Hello! I'm</span>
              <h2 className='top-banner__h2'>Anam</h2>
            </div>
            <div className='top-banner__text-down'>
              <h2 className='top-banner__h2'>Majikijela</h2>
              <span className='brand-span'>Web Developer</span>
            </div>
            <p>A woman in coding</p>
            <Link
                activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='brand-button'>
              <span>Let's get started</span>
              </Link>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
