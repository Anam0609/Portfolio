import React from 'react';
import Work from './Work';


const Cards = () => {
  return (
    <section className='work' id='projects'>
      <h1 className='heading'> My work</h1>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-lg-4'>
            <Work
              title={'Github Finder'}
              text={'A app created with React, finds any github account'}
              link={'https://anam-github-finder.netlify.app'}
            />
          </div>

          <div className='col-lg-4'>
            <Work
              title={'Photo Gallery'}
              text={'One of my first sites when I was learning about css'}
              link= {'https://anam-art-gallery.netlify.app'}
            />
          </div>

          </div>
        </div>
    </section>
  );
};

export default Cards;
