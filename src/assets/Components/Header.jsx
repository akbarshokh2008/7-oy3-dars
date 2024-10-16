import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  console.log('Header render');
  return (
    <div className='bg-slate-800 '>
      <div className='container mx-auto px-24 flex justify-between items-center'>
        <div className='logo'>
          <Link className=' text-white text-3xl  font-bold font-sans' href='/'>
            USER
          </Link>
        </div>
        <nav className='flex gap-5'>
          <Link to='/' className='text-white text-md hover:text-slate-300'>
            Home
          </Link>
          <Link to='/about' className='text-white text-md hover:text-slate-300'>
            About
          </Link>
          <Link
            to='/contact'
            className='text-white text-md hover:text-slate-300'
          >
            <p className='text-white text-md'>Contact</p>{' '}
          </Link>
        </nav>
        <Link to='/' className='flex gap-3 rounded-xl py-2 px-2 bg-cyan-500'>
          <p className='text-white text-md'>Lo gout</p>{' '}
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Header);
