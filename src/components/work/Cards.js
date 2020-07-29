import React from 'react';
import Work from './Work';
import github from '../images/github finder.png';
import art from '../images/Art gallery.png';
import MD from '../images/MD.png';

const Cards = () => {
  return (
    <section className='work' id='projects'>
      <h1 className='heading'> My work</h1>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-lg-4'>
            <Work
              image={github}
              title={'Github Finder'}
              text={'A app created with React, finds any github account'}
              link={'https://anam-github-finder.netlify.app'}
            />
          </div>

          <div className='col-lg-4'>
            <Work
              image={art}
              title={'Photo Gallery'}
              text={'One of my first sites when I was learning about css'}
              link={'https://anam-art-gallery.netlify.app'}
            />
          </div>

          <div className='col-lg-4'>
            <Work
              image={MD}
              title={'Mbhaco Designs'}
              text={'This is an  E-commerce project I created as my final project at the bootcamp. It is created with html,css,js and python for the backend development'}
              link={'https://anamrsa.pythonanywhere.com'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
