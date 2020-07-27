import React from 'react';
import './Work.css';


const Work = (props) => {
  return (
      <div className='card-body' style={{ width: '100%' }}>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>{props.text}</p>
        <p className='card-text'>
          {props.link}
        </p>
      </div>
  )
}

export default Work;


