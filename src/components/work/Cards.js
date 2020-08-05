import React from 'react';
import Work from './Work';
import github from '../images/github finder.png';
import portfolio from '../images/portfolio.png';
import MD from '../images/MD.png';

const Cards = () => {
  return (
    <section className='work' id='projects'>
      <h1 className='heading'> My work</h1>
      <div className='container-fluid align-items-stretch'>
        <div className='row'>
          <div className='col-lg-4'>
            <Work
              image={github}
              title={'Github Finder'}
              text={'A app created with React, finds any github account'}
              link={'https://anam-github-finder.netlify.app'}
              repo={'https://github.com/Anam0609/github-finder.git'}
            />
          </div>

          <div className='col-lg-4'>
            <Work
              image={portfolio}
              title={'Portfolio'}
              text={'Created with reactjs and styled with css'}
              link={'https://anam0609.github.io/Portfolio/'}
              repo={'https://github.com/Anam0609/Portfolio.git'}
              
            />
          </div>

          <div className='col-lg-4'>
            <Work
              image={MD}
              title={'Mbhaco Designs'}
              text={'This is an  E-commerce project I created as my final project at the bootcamp. It is created with html,css,js and python for the backend development'}
              link={'https://anamrsa.pythonanywhere.com'}
              repo={'https://github.com/Anam0609/E-commerce-.git'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
