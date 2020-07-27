import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className='skills' id="skills">
        <div className='my_skills' id='skills'>
          <div className='container'>
            <h2 id='_skills'>My Skills</h2>

            <div className='_skills'>
              <span className='name'>Html</span>
              <div className='percent'>
                <div className='progress' style={{ width: '95%' }} />
              </div>
              <span className='value'>95%</span>
            </div>

            <div className='_skills'>
              <span className='name'>CSS</span>
              <div className='percent'>
                <div className='progress' style={{ width: '80%' }} />
              </div>
              <span className='value'>80%</span>
            </div>

            <div className='_skills'>
              <span className='name'>Javascript</span>
              <div className='percent'>
                <div className='progress' style={{ width: '45%' }} />
              </div>
              <span className='value'>40%</span>
            </div>

            <div className='_skills'>
              <span className='name'>Python</span>
              <div className='percent'>
                <div className='progress' style={{ width: '80%' }} />
              </div>
              <span className='value'>80%</span>
          </div>
          
            <div className='_skills'>
              <span className='name'>mySQL</span>
              <div className='percent'>
                <div className='progress' style={{ width: '60%' }} />
              </div>
              <span className='value'>60%</span>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Skills;
