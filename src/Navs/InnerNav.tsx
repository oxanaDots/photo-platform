import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = {'Make a Booking': '/newbooking', 'Sign Out': '/signout'}

const InnerNav = () => {
  return (
   <nav className='flex justify-between items-center w-full'>
         <h2 className='p-4 font-bold text-orange-500'>Logo</h2>
    <ul className='flex gap-3 p-4 justify-end'>
        {Object.entries(navItems).map(([item, path]) => <NavLink  to={path}><li className={`px-4 text-[0.8rem] py-[0.3rem] rounded-3xl   ${ item !== 'Sign Up'? 'bg-indigo-800 bg-opacity-10 text-violet-950' : 'bg-violet-950 text-orange-50 '}`}>{item}</li></NavLink>)}
    </ul>
   
    </nav>
  );
};

export default InnerNav;