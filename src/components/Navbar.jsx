import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor('#fff');
            setTextColor('#000')
        }else{
            setColor('transparent')
            setTextColor('#fff')
        }
    }
    window.addEventListener('scroll', changeColor)
  },[])

  return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link to={'/'}>
          <h1 style={{color:`${textColor}`}} className='font-bold text-4xl'>Captur.</h1>
        </Link>
        <ul style={{color:`${textColor}`}} className='hidden sm:flex items-center'>
          <Link to={'/'}>
            <li className='p-4'>Home</li>
          </Link>
          <Link to={'/shop'}>
            <li className='p-4'>Shop</li>
          </Link>
          <Link to={'/contact'}>
            <li className='p-4'>Contact</li>
          </Link>
          <Link to={'/about'}>
            <li className='p-4'>About us</li>
          </Link>
          <Link to={'/cart'}>
            <li className='p-4 flex items-center'>
              <AiOutlineShoppingCart />
            </li>
          </Link>
        </ul>

        {/* Mobile Icon */}
        <div className='block sm:hidden z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}} /> : <AiOutlineMenu size={20} style={{color:`${textColor}`}} /> }
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <Link to={'/'}>
              <li className='p-4 text-4xl text-white hover:text-gray-500'>Home</li>
            </Link>
            <Link to={'/shop'}>
              <li className='p-4 text-4xl text-white hover:text-gray-500'>Shop</li>
            </Link>
            <Link to={'/contact'}>
              <li className='p-4 text-4xl text-white hover:text-gray-500'>Contact</li>
            </Link>
            <Link to={'/about'}>
              <li className='p-4 text-4xl text-white hover:text-gray-500'>About us</li>
            </Link>
            <Link to={'/cart'}>
              <li className='p-4 text-4xl text-white hover:text-gray-500 flex items-center justify-center'>
                <AiOutlineShoppingCart />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;