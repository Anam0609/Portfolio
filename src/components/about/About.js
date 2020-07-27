import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className='about' id="about">
      <div className='contentBx'>
        <a href="#about" ><h2 className='heading'>About</h2></a>
        <p className='text'>
          My name is Anam Majikijela, I'm 24 years old and I live in Cape town. I am a junior developer
           who loves playing games, developing websites, watching movies and series.
        </p><br/>
        <p className="text">
          My journey started in in 2015 when I studied and completed Networking but felt like
          that wasn't my destiny and I needed more knowledge because I had a
          passion for something else which is coding. I applied to the Life Choices Coding Bootcamp
          to learn coding and now I am a new junior full stack developer.
        </p>
      </div>
      <div className='imgBx' />
    </section>
  );
};

export default About;
