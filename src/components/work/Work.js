import React from 'react';
import './Work.css';


const Work = (props) => {
  return (
    <div>
      <img className="card-img-top" src={props.image} alt="image"/>
      <div className='card-body' style={{ width: '100%' }}>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>{props.text}</p>
        <a 
          href={props.link} className="brand-button" target="_blank"> Check it out
        </a>
      </div>
    </div>
  )
}

export default Work;


