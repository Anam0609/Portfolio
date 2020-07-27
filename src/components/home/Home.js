import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Anam</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <ul>
              <li>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='links'>
              <span>Contact</span>
                </Link>
              </li>
              <li>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='links'>
              <span>Testimonial</span>
            </Link>
              </li>
              <li>
            <Link
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='links'>
              <span>Portfolio</span>
            </Link>
              </li>
              <li>
              <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links'>
                <span>My Skills</span>
            </Link>
              </li>
              <li>
              <Link
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links'>
                <span>About</span>
            </Link>
              </li>
              <li>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='links'>
                <span>Home</span>
              </Link>
              </li>
              </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className='content' id='home'>
        <div className='d-flex align-items-center justify-content-center'>
          <button
            type='btn-info'
            className='btn-lg'
            variant='primary'
            onClick={handleShow}>
            Greetings
          </button>
        </div>
        <Modal
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={show}>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title className='modal-text-center'>
              Hi, I'm Anam Majikijela...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {' '}
            I am a Developer!
            <img src={require('../images/Me.jpg')} alt='img' />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Home;
