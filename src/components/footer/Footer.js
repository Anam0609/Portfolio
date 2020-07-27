import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <p className='text'>Designed and Developed by Anam Majikijela</p>
      <ul>
        
        <li>
          <a href='https://m.facebook.com/anam.majikijela' target="_blank"> 
            <img src={require('../images/facebook (1).png')} alt='facebook' />
          </a>
        </li>
        <li>
          <a href='https://codepen.io/Majikijela' target="_blank">
            <img src={require('../images/codepen.png')} alt='codepen' />
          </a>
        </li>
        <li>
          <a href='https://github.com/Anam0609' target="_blank">
            <img src={require('../images/github.png')} alt='github' />
          </a>
        </li>

        <li>
          <a href='https://www.linkedin.com/in/anam-bianca-majikijela-944270153' target="_blank">
            <img src={require('../images/linkedin.png')} alt='linkedin' />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
