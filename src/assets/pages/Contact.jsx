import React, { useRef, useCallback } from 'react';
import Header from '../Components/Header';

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;

    console.log('Ism:', name);
    console.log('Elektron pochta:', email);
    console.log('Yosh:', age);
  }, []);

  return (
    <div>
      <Header />
      <div className='container mx-auto px-24'>
        <form
          onSubmit={handleSubmit}
          className='max-w-md mx-auto p-4 border border-gray-300 rounded shadow-md'
        >
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Ism:
              <input
                type='text'
                ref={nameRef}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500'
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Elektron pochta:
              <input
                type='email'
                ref={emailRef}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500'
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Yosh:
              <input
                type='number'
                ref={ageRef}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500'
              />
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200'
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Contact);
