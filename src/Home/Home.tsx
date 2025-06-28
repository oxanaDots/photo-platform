import React from 'react';
import OutterNav from '../Navs/OutterNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCamera, faEye, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const steps= [
  {heading: 'Sign Up',
    icon:  <FontAwesomeIcon icon={faUserPlus} />,
     subheading: 'Register or sign in to have all your bookings on one platform '},

     {heading: 'Book',
      icon:  <FontAwesomeIcon icon={faCamera} />,
       subheading: 'Book a slot which suits you and we will get in touch with you to confirm appointment.  '},

       {heading: 'View',
        icon:  <FontAwesomeIcon icon={faEye} />,
         subheading: 'Review the media and provide feedback by either approving it or suggesting amendments for improvement.'},

         {heading: 'Download',
          icon:  <FontAwesomeIcon icon={faCircleArrowDown} />,
           subheading: 'Select the desired media files, and save them to your local storage.'},

]

const Home = () => {
  return (
    <div >
    <section className='h-full'>
        <OutterNav/>
   
    <section className='corner-shadow  relative border border-transparent py-4 px-10 flex h-full flex-col items-center justify-center'>
 
      <div className='flex   flex-col  py-10 my-20 items-start justify-start'>
      <div className="corner top-left"></div>
  <div className="corner top-right"></div>
  <div className="corner bottom-left"></div>
  <div className="corner bottom-right"></div>
        <h3 className='pb-4 text-primary-dark row-span-1 ' >We provide</h3>
        <div className='grid grid-cols text-primary-dark gap-x-2 grid-rows'>
            <h3 className='col-start-1 font-semibold text-sm row-start-1 '>photo</h3>
            <h3 className='col-start-1 font-semibold text-sm row-start-2'>video</h3>
            <h3 className='col-start-2 text-4xl font-semibold row-span-2'>-GRAPHY</h3>
        </div>
        <h3 className='pt-4 text-secondary-dark'>for commercial, event and property needs.</h3>
        <button className=' font-semibold self-center mt-40  text-secondary-light px-4 text-[0.8rem] py-[0.4rem] rounded-3xl bg-secondary-dark'><Link to='/signup'>Create an Account</Link></button>
        </div>
    </section>
    <section className='flex flex-col items-center justify-center pt-6 pb-20  '>
      <h2 className='py-20 font-semibold text-primary-dark text-4xl'>Getting started is really easy</h2>
     
     <div className='flex gap-20  justify-center  py-10 border-y-2 border-secondary-dark'>
      {steps.map(item => 
      <div className='w-[10%]  flex flex-col items-center gap-5'>
      <h2 className='text-2xl text-primary-dark'>{item.heading}</h2>
      <div className='text-orange-500 text-2xl text-opacity-80 '>{item.icon}</div>
      <p className='text-center text-sm text-primary-dark'>{item.subheading}</p>
      </div>
      )}
     </div>
    </section>
     </section>
    </div>
  );
};

export default Home;