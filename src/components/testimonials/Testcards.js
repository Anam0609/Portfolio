import React from 'react';
import Testimonials from './Testimonials';
import man from '../images/man.png';
import people from '../images/people.png';
import people2 from '../images/people (2).png';
import med from '../images/medical-mask.png';
import mask from '../images/medical-mask (1).png';
import prev from '../images/prevention.png';

const testCards = () => {
  return (
    <section className='Testimonials' id="testimonials">
      <h2 className='heading' style={{ marginBottom: "60px", marginTop: '30px'}}>What people have to say about me!</h2>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-lg-4'>
            <Testimonials
              image={man}
              title={'Godwin Dzvapatsva'}
              text={
                "I appreciate Anam's follow through with each python project that I gave her during the course. She is someone who managed to work within given timelines producing succinct pieces of work without compromised quality. Anam displayed a positive attitude towards her studies throughout. "
              }
              btn={'Head of Curriculum and Learning'}
            />
          </div>
          <div className='col-lg-4'>
            <Testimonials
              image={people}
              title={'Jason Wandrag'}
              text={
                'Anam would be a great addition to any team, as her diligence and positivity is infectious.'
              }
              btn={'Lecturer/Developer'}
            />
          </div>
          <div className='col-lg-4'>
            <Testimonials
              image={people2}
              title={'Ryan Barron'}
              text={
                "Anam is one of the best developers I've seen in a long time, with a keen senseof style her projects are nothing short of remarkable, having worked side by side with her was truly an amazing experience, A true team player and also a true master of individual brilliance, Her passion brought forth in everything she does.Employing her would only benefit the company. "
              }
              btn={'Homie/Developer'}
            />
          </div>

          <div className='col-lg-4'>
            <Testimonials
              image={med}
              title={'Yonela Ntsangani'}
              text={
                'Anam is a team player, an excellent problem solver and enthusiastic individual.Her passion for her work is truly honorable.It would be a great privilege to have her on your team. '
              }
              btn={'Friend/Developer'}
            />
          </div>

          <div className='col-lg-4'>
            <Testimonials
              image={mask}
              title={'Lukhanyo Vakele'}
              text={
                "Anam is an interesting person, the way she thinks and comes up with solutions to a problem is the greatest strength, she thinks before she does anything. She is good in working in teams, easy to talk to and when she puts her mind at something, there's nothing she can't do."
              }
              btn={'Friend/Developer'}
            />
          </div>

          <div className='col-lg-4'>
            <Testimonials
              image={prev}
              title={'Ntombekhazi Sibetyu'}
              text={
                "Anam is an intelligent, hard working and very humble individual. She is very dedicated in always producing the best in her work. She is a teamplayer, which makes it easy to work with her. She is resourcful and I believe that makes her a great asset. "
              }
              btn={'Friend/Developer'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default testCards;
