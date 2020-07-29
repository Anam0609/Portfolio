import React from 'react';
import './Testimonials.css';

const Testimonials = (props) => {
  return (
    
    <div>
      <img className="card-img-top" src={props.image} alt="image" />
        <div className='card-body' style={{ width: '100%' }}>
          <h4 className='card-title'>{props.title}</h4>
          <p className='card-text text-secondary'>{props.text}</p>
          <p className='card-text'>{props.btn}</p>
        </div>
    </div>
  );
};

export default Testimonials;
