import React from 'react';
import './Work.css';


const Work = (props) => {
  return (
    <div>
      <img className="card-img-top" src={props.image} alt="img"/>
      <div className='card-body'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>{props.text}</p>
      <div className='card-footer'>
        <a 
          href={props.link} className="brand-button" target="_blank" rel="noopener noreferrer"> Check it out
        </a>

        <a 
          href={props.repo} className="brand-button" target="_blank" rel="noopener noreferrer"> Check out the repo
        </a>

      </div>
      </div>
    </div>
  )
}

export default Work;


