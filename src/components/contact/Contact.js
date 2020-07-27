import React from 'react';
import Form from './Form';
import { Link } from 'react-scroll';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='contact' id="contact">
        <h2 className='heading'>Get in touch</h2>
        <p className='text'>
          If you like what you see, Please send me a message!
        </p>

      <div className='about'>
        <div className='contentBx'>
          <div className='form'>
            <Form />
          </div>
        </div>
          <div className='imgBx2'></div>
        </div>
      </div>
         <div>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='arrow'>
          <i className='fas fa-arrow-up' />
        </Link>
      </div>
      </>
  );
};

export default Contact;
