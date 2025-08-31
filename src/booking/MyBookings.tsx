import React, { useEffect, useState } from 'react';
import Sidebarmenu from '../User/Sidebarmenu'
import InnerNav from '../Navs/InnerNav';
import BookingItem from './BookingItem';
import { formatDate } from '../utils/formatDate';

function MyBookings() {
const [bookings, setBookings] = useState([])

  useEffect(()=>{
    async function helper(){

      const res = await fetch ("http://localhost:3000/mybookings")
      const data = await res.json()
       setBookings(data.data)

    }
    helper()
  }, [])

 

  console.log(bookings)
  return (
   <div className='flex flex-col justify-center'>
    <section className='flex  py-6 items-center justify-center flex-col px-5'>

      <div className='flex self-end justify-center w-full'>
         <InnerNav/>
      </div>
        <div className="flex  w-[80%]  py-10 ">
          <Sidebarmenu/>
           <div className=" justify-left w-[100%] flex-col gap-6 flex border-t border-l border-primary-dark py-12 px-14">
            
            {bookings.map(item =>(
           <BookingItem 
            status='Completed' 
            orderId={item.appointment_id} 
            serviceandOcassion={item.service_name}
            address={`${item.street_name} ${item.street_number}, ${item.postcode}`}
            dateAndTime={formatDate(item.date_and_time)}
            />
            ))}
           
           
  </div>
  </div>
  </section>
  </div>
  );
}

export default MyBookings;