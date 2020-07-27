import React from 'react';

const Form = () => {
  return (
    <div>
      <form
        action='https://formspree.io/biancamajikijela95@gmail.com'
        method='POST'>
        <div>
          <div className='inputBx'>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              required
            />
          </div>
          <div className='inputBx'>
            <input
              type='text'
              name='_replyto'
              placeholder='Email Address'
              required
            />
          </div>
          <div className='inputBx'>
            <input type='text' name='phone' placeholder='Contact Number' />
          </div>
          <div className='inputBx'>
            <textarea
              placeholder='Write your message here...'
              defaultValue={''}
            />
          </div>
          <div className='inputBx'>
            <button type='submit'>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
