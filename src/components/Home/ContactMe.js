import React from 'react';
import contact from '../../assets/images/contact-me.webp';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xgwtpcu', 'template_3o0xkgv', e.target, 'LHgCjqRCZfLz1Dr91').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-24 items-center'>
      <form onSubmit={sendEmail}>
        <label className='label'>
          <span className='label-text'>Your name?</span>
        </label>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='input input-bordered input-primary w-full max-w-lg text-lg'
        />
        <label className='label'>
          <span className='label-text'>Your Email?</span>
        </label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='input input-bordered input-primary w-full max-w-lg text-lg'
        />
        <label className='label'>
          <span className='label-text'>Your Message</span>
        </label>
        <textarea
          rows={'4'}
          name='message'
          className='textarea textarea-primary w-full max-w-lg mb-3 text-lg'
          placeholder='Message'
        ></textarea>
        <input type='submit' value='Send' className='btn btn-primary w-full max-w-lg' />
      </form>
      <div className='avatar justify-end'>
        <div className='w-96 mask mask-squircle'>
          <img src={contact} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
