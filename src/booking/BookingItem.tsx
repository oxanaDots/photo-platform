import React from 'react';

function BookingItem({status, orderId, serviceandOcassion, address, dateAndTime}) {
  return (
    <div className='flex  '>

        <div className='flex flex-col  text-xs '>
          <p className='text-[0.6rem] mb-1'>Status</p>
           <p className='bg-ternary-light p-4 text-center border-y border-r border-primary-dark flex h-[6rem] items-center w-[8rem] justify-center'>{status}</p>
        </div>

          <div className='flex flex-col  text-xs  '>
          <p className='text-[0.6rem] mb-1'>Order ID</p>
           <p className='bg-ternary-light p-4 text-center border-y border-r border-primary-dark flex h-[6rem] items-center w-[8rem] justify-center'>{orderId}</p>
        </div>

          <div className='flex flex-col  text-xs  '>
          <p className='text-[0.6rem] mb-1'>Service</p>
           <p className='bg-ternary-light p-4 text-center border-y border-r border-primary-dark flex h-[6rem] items-center w-[8rem] justify-center'>{serviceandOcassion}</p>
        </div>

          <div className='flex flex-col text-xs  '>
          <p className='text-[0.6rem] mb-1'>Address</p>
           <p className='bg-ternary-light p-4 text-center border-y border-r border-primary-dark flex h-[6rem] items-center w-[8rem] justify-center'>{address}</p>
        </div>

          <div className='flex flex-col text-xs  '>
          <p className='text-[0.6rem] mb-1'>Date and time</p>
           <p className='bg-ternary-light p-4 text-center border-y border-r border-primary-dark flex h-[6rem] items-center w-[8rem] justify-center'>{dateAndTime}</p>
        </div>

       <div className='flex justify-end flex-col'>
        <button className=' self-baseline text-xs mx-4 w-[8rem] h-[6rem] bg-primary-dark text-secondary-light'>View booking</button>
      </div>
      </div>
   
  );
}

export default BookingItem;