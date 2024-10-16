import React from 'react';
import { useMemo, useState } from 'react';
import Header from '../Components/Header';

function About() {
  const raqam = Array.from({ length: 100 }, (_, index) => index + 1);
  const [input, setInput] = useState('');
  const inputFilter = useMemo(() => {
    return raqam.filter(
      (number) => number % 2 === 0 && number.toString().includes(input)
    );
  }, [input]);

  return (
    <div>
      <Header />
      <div className='container mx-auto px-24'>
        <h2 className='mt-5 text-gray-600'>UseMemo haqida </h2>
        <div className='flex flex-col gap-5 justify-center items-center mb-10'>
          <h1 className='text-5xl font-bold text-gray-600'>
            Juft Sonlar Filtri
          </h1>
          <input
            type='number'
            placeholder='Sonni kiriting...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-[400px] py-1 px-2 outline-none border-2 border-blue-700'
          />
        </div>

        <div className='flex flex-wrap gap-5'>
          {inputFilter.length > 0 ? (
            inputFilter.map((number) => (
              <span className='text-2xl text-blue-500 font-bold'>
                {number} /
              </span>
            ))
          ) : (
            <p>Bunday malumot yoq :)</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(About);
